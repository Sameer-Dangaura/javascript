//! event loop
// The reason for asyncronous behaviour of JS, even it is single threaded => event loop

// JS engine:
// * call stack
// : Call stack executes 1 task at a time. At 1st, the call stack task is done i.e. synchronous task is done 1st which follow LIFO and, after call stack task empty, it shifts to task queue to execute task.
// * task queue / callback queue
// : classified into macrotask queue (higher priority), macrotask queue (lower priority)
// * event loop
// : It pop task from task queue and add to call stack. It loops between call stack and task queue.

// Out of JS engine :
// ? web apis (browser) => timers, fetch, location, storage
// ? libUv (nodeJS)
// Some task which should wait, is came out from JS engine and sit out of JS engine such web apis.

//---
// synchronous code example:
// const add = (a, b) => {
//   console.log(a + b); //15
//   const c = () => {
//     console.log("c");
//   };
//   c();
// };

// add(12, 3);
// add(12, 3);

//? Understanding call stack for above:
// c()  <- Top pointer
// add()

//---
// Asynchronous code example:
// console.log("start");
// setTimeout(() => {
//   console.log("set time out");
// }, 2000);
// console.log("end");

//? Understanding call stack, task queue, and event loop for setTimeout():
// Since setTimeout() is a part of timers in web apis, it sit out of JS engine in web apis of timers.
// After it's set time is reached it is scheduled to task queue
// And event loop, pop out the task from task queue and add to call stack.
// And again call stack starts to execute task which are inside call stack.

//---
// Promises is a part of microtask queue
// then, catch is part of microtask queue
// setTimeout is part of macrotask queue
// fetch is a part of microtask queue

//---
// Advance concept:
//! nodejs event loop phases
// :
/*
Phases were introduced to organize different kinds of tasks so that they run in a fair, predictable, and efficient order.

Now let’s understand why this was necessary.

🧠 1. The Real Problem: Not All Tasks Are Equal

In a Node.js program, many types of tasks exist:

- ⏱ Timers (setTimeout)

- 📁 File I/O

- 🌐 Network I/O

- ⚡ setImmediate

- ❌ Closing resources

- 🔁 Promises

These tasks are very different in nature.

Some are:

- Time-based

- Some depend on hardware

- Some are internal

- Some are cleanup

If we mix them randomly → chaos.

❌ 2. What If There Were NO Phases?

Imagine this system:

“Put all callbacks in one big queue and run them.”

Problem:
```
Big Queue:
Timer → File → Timer → Network → Immediate → Timer → ...
```

What happens?

🔴 Problems:
(a) Starvation

Some tasks may never run.

Example:
If timers keep coming → I/O never runs.

(b) Unpredictable Order

Developers cannot guess:

“Which runs first?”

Bugs increase.

(c) Performance Loss

CPU wastes time switching randomly.

(d) No Priority Control

Important tasks may be delayed.

This is bad system design.

🏗 3. Solution: Divide Work Into Phases

So Node.js designers said:

“Let’s classify tasks and process them step by step.”

Thus:

👉 Phases were created.

Each phase = One category of work.

🔁 4. Phases = Assembly Line in a Factory

Think of a factory 🏭

Cars are built in stages:

1️⃣ Body
2️⃣ Engine
3️⃣ Paint
4️⃣ Quality Check
5️⃣ Delivery

You cannot mix them.

Same idea:

Phase	Handles
Timers	Time tasks
I/O	    System tasks
Poll	Main work
Check	Immediate
Close	Cleanup

Each does one job well.

⚙️ 5. Technical Reason: Cooperation with libuv

Internally, Node.js uses libuv.

libuv manages:

- Thread pool

- OS events

- File descriptors

- Network sockets

- libuv itself works in stages.

So Node’s phases match libuv’s internal workflow.

👉 Phases are not “random” — they are system-driven.
*/

//* phase-1: timers => setTimeout, setInterval
//* phase-2: pending callbacks => tcp err, dns err callbacks
//* phase-3: idle/prepare phase => node internal
//* phase-4: poll phase (most imp phase) => file system, incoming i/o, req, res
//* phase-5: check phase => setImmediate
//* phase-6: close callbacks => closing callbacks

// Microtasks: Special Priority System
//* 1. process.nextTick() queue
//* 2. Promise queue

//? Difference between setTimeout(()=>{},0) and setImmediate(()=>{})
//:
// setTimeout(()=>{},0) runs this after at least 0 ms, in the next timers phase.
// But 0 ms ≠ immediately. It still waits for one full loop cycle.
// setImmediate(()=>{}) runs this immediately after I/O (Poll phase).

console.log("1");
setTimeout(() => {
  console.log("timer");
}, 200);
Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => {
    console.log("4");
  }, 100);
});
console.log("2");

process.nextTick(() => {
  // process.nextTick() is only used to executed highest priority order task. process.nextTick() can freeze a Node.js process by preventing the event loop from running other tasks, specifically I/O operations and timers, if it is used to schedule an infinite loop of callbacks or a very large number of callbacks. So try to do minimal use of it.
  console.log("next");
});
