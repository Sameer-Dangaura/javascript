//! function
// {}

// syntax:
// function function_name(){
    // block of code
// }

//! function declaration

function greet(){
    console.log('Hello World')
}

// function invocation
greet()


// function with parameters & arguments
function greeting(x){
    console.log("Hello " + x)
    console.log("Nice to meet you,", x)
}

greeting("Ram")
greeting() // undefined



//Q. add function with 2 parameters:
function addFun(x, y){
    console.log(x + y)
}

addFun("Ram ", "Shyam")
addFun(2,3)
addFun(2) // NaN


//default parameter
function greeting(x = 'Guest'){
    console.log("Hello " + x)
}

greeting("Ram")
greeting()


// with return type
function addFun1(x, y){
    return (x + y)
}

const x = addFun1(12, 34)
console.log('x:', x)



//! fucntion expression
let add = function(a, b){
    return (a+b)
};
console.log(add(2,2))



//Q. subtraction:

function sub(a,b){
    return (a-b)
}
console.log(sub(5,3))

// using function expression
let sub1 = function(a,b){
    return (a-b)
};
console.log(sub1(5,5))



//! arrow function
const mul = (a,b) => a*b;
// OR,
const mul1 = (a, b) => {
    return a*b
};

const square = a => a*a

console.log(mul(3,3))
console.log(mul1(3,4))
console.log(square(5))




//! callback function => a function which takes function as an argument
const parent = function(a){
    console.log("parent function")
    console.log(a) // [Function: child] i.e. reference of child function
    a() // calling child function
};

const child = function(){   // callback function
    console.log('child function')
};

parent(child) //  reference of child function is passed




//! hof (Higher Order Function) => A higher-order function in JavaScript is a function that does at least one of the following: 
// - Takes one or more functions as arguments (often called callback functions).
// - Returns a function as its result. 

const hof = () =>{
    console.log('Hof')
    const child = () =>{
        console.log('child')
    }
    return child  // returns a function
}

const children = hof()  // hof() outputs: Hof

children()  // children() outputs: child


// calculate discount
// student => 20%
// festival => 10%

const calculateDiscount = (price,logic) =>{
    return logic(price)
}

const studentDiscount = (price) =>{
    return price*0.8
}

const festivalDiscount = (price) =>{
    return price*0.9
}

const studentDis = calculateDiscount(1000,studentDiscount)
const festiveDis = calculateDiscount(1000,festivalDiscount)

console.log(studentDis,festiveDis)




//! IIFE -> immediatly invoked function expression

// (
//     function(){
//         console.log('IIFE')
//     }
// )()




//* generator => A generator function is a special type of function that can pause its execution at any point and resume later. They are defined using the function* syntax and use the yield keyword to pause execution and return a value.
// When called, a generator function returns a Generator Object, not a direct value.
// 
function* generate(){
    let i = 0
    while(true){
        yield i
        i++
    }
}

const gen = generate()
console.log(gen.next()) // 1
console.log(gen.next()) // 2
console.log(gen.next()) // 3
console.log(gen.next())


/* 
Q. Does iterator and generator in javascript same?
Ans:
---
In JavaScript, iterators and generators are not the same thing, but they are closely related. A generator is a special type of function that acts as a factory for creating iterators. 

# Key Differences

**Definition**:
- An iterator is any object that follows the Iterator protocol by having a next() method that returns { value: any, done: boolean }.
- A generator is a special function (defined with function*) that uses the yield keyword to pause and resume execution. When called, it returns a Generator object.

**Complexity**:
- Iterators require you to manually manage the internal state (like a counter).
- Generators handle state automatically; the function "remembers" where it left off each time it yields a value.

Relationship: Every generator object is an iterator (it has a next() method), but not every iterator is a generator.


## Comparison Table

Feature 	Iterator	                                        Generator

Creation:	Manually created as an object with a next() method.	  Created by calling a `function*`.
State Management:	Developer must manually track current position.	  Automatically handled by the `yield` keyword.
Pausing	   Cannot "pause" code; it just returns a value from an object.	  Can pause execution mid-function and resume later.
Syntax	  Standard object structure.	  Uses `function*` and `yield`.

Pro Tip: Use generators when you need to define custom iteration logic easily or work with infinite data streams without loading everything into memory. 

*/



//! anonymous function

parent(function(a){
    console.log('a')
})


