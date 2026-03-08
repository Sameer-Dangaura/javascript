//! Global scope

// block scope {} => if, for, while, etc. (except for var)
// function scope {} => function

// const & let => block scope
// var => function scope

// lexical scope => means that a function can access variables from its own scope and from the outer scopes, but not from the inner scopes.
// Example:

function outer() {
  let x = 10;
  function inner() {
    console.log(x); // 10
  }
  inner();
}
outer();

//* scope chaining
//: if a variable is not found in the current scope, it looks for it in the outer scope, and so on until it reaches the global scope.
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
function one() {
  if (true) {
    let x = 200;
    console.log(x); // 200
    x = 400;
  }
  console.log(x); // not defined
}

one();
