// ES6 => introduced in 2015

//1. let const / block scope

//2. template literal
// ``

//3. arrow function

//4. default parameter

//5. promises

//6. async await => 2017 update

//7. class

//8. import/export

//9. spread & rest operator [...]
//? spread [...] => expands => obj/array copy
// // obj
// const user = {
//   name: "John Doe",
//   phone: "123456789",
// };

// let john = {
//   email: "john@gmail.com",
//   //   user: user,
//   // or, even better:
//   ...user,
// };
// // console.log(john);

// // let newUser = user; //directly takes reference
// let newUser = { ...user }; // copies object only
// newUser.name = "abc";
// console.log(newUser);
// console.log(user);

// //array
// const number = [1, 2, 3, 4, 5];
// const fruitBox = ["apple", "banana"];
// const array = [...number, ...fruitBox];
// console.log(array);

// //? rest [...] => accumulate i.e. opposite of expands. It allows you to collect multiple elements or arguments into a single array or object.
// // By using array methods:
// const add = (...array) => {
//   //   return (sum = array.reduce((acc, value) => {
//   //     return (acc = acc + value);
//   //   }, 0));
//   // or, even shorter way:
//   return array.reduce((acc, value) => (acc += value));
// };

// // console.log(add([2, 3, 4])); // this will work if add = (array) => {}
// // console.log(add([2, 3, 4, 5]));

// console.log(add(2, 3, 4, 5)); // this will work if add = (...array) => {} . i.e. for using rest operator

// 10. destructuring

const obj = {
  name: "john doe",
  phone: "123456789",
};
// let name = obj.name;
// let phone = obj.phone;
// console.log(name, phone);

// using destructuring concept to an obj:
let { name, phone } = obj; // creates new varaible having same property name inside obj
console.log("name:", name);
console.log("phone:", phone);

const newUser = {
  name: "jenny",
  phone: "1234512345",
};

let { name: userName, ...rest } = newUser; // object destructuring with renaming
// ...rest collects remaining properties
console.log("userName:", userName);
console.log("rest:", rest);

// // destructuring obj in function:
// // we can even use destructuring array in function

// const func = ({ name, email }) => {
//   //   console.log(obj.name, obj.email);
//   console.log(name, email);
// };

// func({ name: "abc", email: "abc@gmail.com" });

// // array destructuring:
// const array = [23, 4, 5];
// let [a, ...other] = array;
// console.log(a, other);

// // 11. enhanced object literal => {}
// let name = "john";
// let password = "12345789";
// let email = "john@gmail.com";

// let newObj = {
//   name, // donot use name:name if both name is same
//   userEmail: email,
//   password,
// };
// console.log(newObj);
