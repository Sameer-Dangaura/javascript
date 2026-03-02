//! operators

//unary
// post/pre
// let num = 0
// post inc/dec

//! ternary operator


//! type conversion
// implicit / type coercing
console.log(10 + '10')
console.log(10 - '5')
console.log(10 - 'a')

// explicit 
console.log(Number('456'))
console.log(String(444))

console.log(Boolean(45))
console.log(Boolean("4jdhfjd"))
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Number.toString(45))


//! truthy & falsy values

//truthy => which act as true

// falsy => which act as false
//* 0, '', false, null, undefined
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(1)); //truthy



if (res === null || res === undefined){
    //err
}

// OR

let res = null
if (!res){
    //err
}



if (' '){
    console.log(true)
}

// OR,

if (''){
    console.log(true)
}
