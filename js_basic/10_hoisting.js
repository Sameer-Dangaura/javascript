//! Hoisting
// GEC - Global Execution Context

// memory creation phase [EC creation] & execution phase

// phase 1: memory creation phase
// x: undefined
// hoist: reference to the function in memory

// phase 2: execution phase


// console.log(x); // undefined
// var x = 5;

// JS engine hoists the declaration of x to the top, but not the assignment
// So it is interpreted as:
var x;
console.log(x); // undefined
x = 5;


// Function declarations are also hoisted
console.log(hoist); // Output: [Function: hoist]
hoist(); // Output: "Hoisted function"
function hoist(){
    console.log("Hoisted function");
}



// 
add (12, 3);
add (120, 30);
add (12, 3);
add (12, 3);
function add(a, b) {
    console.log(a + b);
}
//GEC



// let and const are also hoisted but they are not initialized until their definition is evaluated. This means that if you try to access them before their declaration, you will get a ReferenceError.

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// TDZ - Temporal Dead Zone



// function expressions are not hoisted. If you try to call a function expression before it is defined, you will get a TypeError.
console.log(func1); // undefined
// console.log(func1()); // TypeError: func1 is not a function
var func1 = function() {
    console.log("var function");
}

