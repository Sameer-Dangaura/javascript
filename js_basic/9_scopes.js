//! Global scope

// block scope {} => if, for, while, etc. (except for var)
// function scope {} => function

// const & let => block scope
// var => function scope


// lexical scope => where the function is declared, not where it's called

function outer() {
    let x = 10;
    function inner() {
        console.log(x); // 10
    }
    inner();
}
outer();


//* scope chaining
let a = 100;
function outer1() {
    let a = 10;
    function inner2() {
        let a = 20;
        console.log(a); // 20
    }
    inner2();
}
outer1();


//Q.
function one(){
    if(true){
        let x = 200;
        console.log(x); // 10
        x = 400
    }
    console.log(x); // not defined
}

one();


