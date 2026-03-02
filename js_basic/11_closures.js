//! closure

// const add = (a,b) => {
//     return a + b;
// }

// add(12, 3);
// add(120, 30);
// add(12, 3);
// add(12, 3);



// lexical

const parent = () => {
    let x = 0;
    // let x = "parent var";
    const child = () => {
        x++;
        console.log(x);
    }
    // child();    // parent var
    return child;
};

const child =parent();

child();    // parent var // 1


console.log("-------");


// 
const createCounter = () => {
    let count = 0
    const updateCount = () => {
        console.log(count);
        count++;
    }
    return updateCount;
}
// updateCount();
// updateCount();
// updateCount();
// count = 10;
// updateCount();
// updateCount();

// closure
const counter = createCounter(); // {count: 0}
const counter1 = createCounter(); // {count: 0}
counter(); // 0
counter(); // 1
counter1(); // 0
counter1(); // 1
counter(); // 2
counter(); // 3

console.log("-------");


//Q. initial count arg, inc, reset
const createCounterFunc = (arg=0) => {
    let count = arg
    
    let obj = {
        increment: () =>{
            count++;
            console.log(count);
        },
        reset: () =>{
            count = arg
            console.log(count);
        }
    }

    return obj;
}
const counter4 = createCounterFunc(4);
counter4.increment();
counter4.increment();
counter4.increment();
counter4.reset();
counter4.increment();
counter4.increment();

console.log("-------")


// Or,
const createCounterFunc1 = (arg=0) => {
    let count = arg
    
    const increment = () =>{
        count ++;
        console.log(count);
    }
    
    const reset = () =>{
        count = arg
        console.log(count);
    }

    return {    // returning an object
        increment: increment,   // or just write increment,
        reset: reset,   // or just write reset
    }
}

const counter5 = createCounterFunc1(4);
counter5.increment();
counter5.increment();
counter5.increment();
counter5.reset();
counter5.increment();
counter5.increment();
counter5.increment();

console.log("-------")


// Or,
const createCounterFunc2 = (arg=0) => {
    let count = arg
    
    return {    // returning an object
        increment : () => {
            count ++;
            console.log(count);
        },
        reset: () => {
            count = arg
            console.log(count);
        }
    }
}
const counter6 = createCounterFunc2(4);
counter6.increment();
counter6.increment();
counter6.increment();
counter6.reset();
counter6.increment();
counter6.increment();
counter6.increment();






//TODO Q. createAccount(name, initial_amnt), return => withdraw, deposit, inquiry, getDetails

const createAccount = (initial_name="John Doe", initial_amnt=5000) => {
    const name = initial_name
    let amnt = initial_amnt

    const withdraw = (withdraw_amnt) =>{
        if(withdraw_amnt > amnt || withdraw_amnt <= 0){
            console.log("wrong amount entered")
            return
        }
        amnt -= withdraw_amnt
        console.log("your current balance:", amnt)

    }

    const deposit = (deposit_amnt) =>{
        if(deposit_amnt <= 0){
            console.log("wrong amount entered")
            return
        }
        amnt += deposit_amnt
        console.log("your current balance:", amnt)
    }

    const inquiry = () =>{
        console.log("your current balance:", amnt)
    }

    const getDetails = () =>{
        console.log("Name:", name);
        console.log("current balance:", amnt)
    }

    return {
        withdraw,
        deposit,
        inquiry,
        getDetails
    }
}

const user1 = createAccount("Dipak",10000);
user1.getDetails();
user1.withdraw(1000);
user1.deposit(2000);
user1.inquiry();
user1.getDetails();

