//! object

// new keyword
// const obj = new Object()


// object literal
const user = {
    name: 'Raj',
    email: 'raj@gmail.com',
    age: 28,
    "user rollno": 22
};

console.log(user)

// accessing object properties using dot notation
console.log(user.email)

// accessing object properties using bracket notation
console.log(user['email'])

console.log(user['user rollno'])

let key = 'name'
console.log(user.key) //undefined
console.log(user[key])


// add new properties to an object
// modify properties to an object
// delete properties from an object


// handling error for an object
if (user.school){
    if(user.school.address){
        console.log(user.school.address)
    }
}
// OR use
//! optional chaining
console.log(user.school?.address)

