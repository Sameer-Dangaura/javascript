// //! promise
// // promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// // A Promise is in one of these states:
// // * pending: initial state, neither fulfilled nor rejected.
// // * fulfilled: meaning that the operation completed successfully.
// // * rejected: meaning that the operation failed.

// console.log("start");
// // custom promise
// // A Promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function, and it is executed immediately by the Promise implementation. The executor function takes two arguments: resolve and reject. These are functions that you can call to either fulfill or reject the promise, respectively.
// const promise = new Promise((resolve, reject) => {
//   //
//   // task
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 2000);
// });

// // console.log(promise);
// // console.log("end");

// //! handling promise
// // To handle the result of a promise, you can use the .then() method, which takes two arguments: a callback function that is called when the promise is fulfilled, and a callback function that is called when the promise is rejected. The then method returns a new promise, which allows for chaining multiple then calls together.
// promise.then((data) => {
//   console.log(data);
// });

// console.log("end");
// console.log("------");

// //
// // another example with catch and finally
// console.log("start");
// // custom promise1
// const promise1 = new Promise((resolve, reject) => {
//   //
//   // task
//   setTimeout(() => {
//     reject("promise rejected");
//   }, 2000);
// });

// //! handling promise
// promise1
//   .then((data) => {
//     // when promise is resolved
//     console.log(data);
//   })
//   .catch((error) => {
//     // when promise is rejected
//     console.log(error);
//   })
//   .finally(() => {
//     // always executed
//     console.log("promise is settled finally");
//   });

// console.log("end");
// console.log("----");

// //---
// // previous async example from 13_async.js using promise:
// console.log("start");

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true; // error = true => reject() method calls &  error = false => resolve() method calls.
//       if (error) {
//         reject({ message: "User fetch failed" });
//       } else {
//         resolve({ name: "John", id: 1 });
//       }
//     }, 2000);
//   });
// };

// //! handling promise:
// fetchUser()
//   .then((data) => {
//     // when promise is resolved
//     console.log(data);
//   })
//   .catch((error) => {
//     // when promise is rejected
//     console.log(error);
//   })
//   .finally(() => {
//     // always executed
//     console.log("promise is settled finally");
//   });

// console.log("end");
// console.log("------");

// //---
// // another example with chaining promises:
// console.log("start");

// const fetchUser1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false; // error = true => reject() method calls &  error = false => resolve() method calls.
//       if (error) {
//         reject({ message: "User fetch failed" });
//       } else {
//         resolve({ name: "John", id: 1 });
//       }
//     }, 2000);
//   });
// };

// const fetchPost1 = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;
//       if (error) {
//         reject({ message: "User fetch post failed" });
//       } else {
//         resolve({ id: 1, userId: user.name, title: "Post 1" });
//       }
//     }, 1000);
//   });
// };

// const fetchComments = (post) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;
//       if (error) {
//         reject({ message: "User fetch comments failed" });
//       } else {
//         resolve([
//           { postId: post.id, id: 1, content: "comment 1" },
//           { postId: post.id, id: 2, content: "comment 2" },
//         ]);
//       }
//     }, 1000);
//   });
// };

// //! handling promise for individual promise:
// fetchUser1()
//   .then((data) => {
//     // when promise is resolved
//     console.log(data);
//   })
//   .catch((error) => {
//     // when promise is rejected
//     console.log(error);
//   })
//   .finally(() => {
//     // always executed
//     console.log("promise is settled finally");
//   });

// fetchPost1({ id: 1, name: "John" })
//   .then((post) => {
//     // when promise is resolved
//     console.log(post);
//   })
//   .catch((error) => {
//     // when promise is rejected
//     console.log(error);
//   })
//   .finally(() => {
//     // always executed
//     console.log("promise is settled finally");
//   });

// console.log("end");
// console.log("------");

// //! handling promise using promise chaining:
// fetchUser1()
//   .then((data) => {
//     // when promise is resolved
//     console.log(data);

//     // * this is the promise chaining
//     fetchPost1(data)
//       .then((post) => {
//         // when promise is resolved
//         console.log(post);
//       })
//       .catch((error) => {
//         // when promise is rejected
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     // when promise is rejected
//     console.log(error);
//   })
//   .finally(() => {
//     // always executed
//     console.log("promise is settled finally");
//   });

// console.log("end");
// console.log("------");

// //! handling promise using promise chaining to avoid callback hell even more cleaner way:
// fetchUser1()
//   .then((user) => {
//     console.log(user);
//     return fetchPost1(user); // this will return a promise from fetchPost1(), it will execute the callback function after 1 second, it is async, it will not block the next line
//   })
//   .then((post) => {
//     console.log(post);
//     return fetchComments(post); // this will return a promise from fetchComments(), it will execute the callback function after 1 second, it is async, it will not block the next line
//   })
//   .then((comments) => {
//     console.log("Comments 1:", comments[0]);
//     console.log(comments);
//   })
//   .catch((error) => {
//     // this will catch any error that occurs in the promise chain for fetchUser1(), fetchPost1() and fetchComments()
//     console.log(error);
//   });

// //---
// //! fetch API is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a promise that resolves to the Response object representing the response to the request. The fetch API is used to make asynchronous requests to a server and handle the response in a more modern and flexible way compared to older methods like XMLHttpRequest.

// fetch("https://jsonplaceholder.typicode.com/todos") // fetch() method takes the URL of the resource you want to fetch as an argument and returns a promise that resolves to the Response object representing the response to the request. This is in ReadableStream form, which is not understable format for us. So, for that we have to use response.json() which returns stream of body into understandable format to an object i.e. Promise. This concept is used below:
//   .then((response) => {
//     console.log("Response:", response); // response is a Response object that contains the status, headers, and body of the response. It also has methods to read the body of the response, such as json(), text(), etc.

//     return response.json(); // Return the promise from response.json() so it can be chained
//   })
//   .then((data) => {
//     console.log("Data:", data); // Log the parsed JSON data
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// //---
// // To fetch a single todo item with id 1
// fetch("https://jsonplaceholder.typicode.com/todos/1") // fetch() method takes the URL of the resource you want to fetch as an argument and returns a promise that resolves to the Response object representing the response to the request.
//   .then((response) => {
//     console.log("Response:", response); // response is a Response object that contains the status, headers, and body of the response. It also has methods to read the body of the response, such as json(), text(), etc.

//     return response.json(); // Return the promise from response.json() so it can be chained
//   })
//   .then((data) => {
//     console.log("Data:", data); // Log the parsed JSON data
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// //---
// //! async/await
// // async/await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous and readable way. It is used to handle promises in a more elegant way, making the code easier to read and maintain.

// // async function : An async function is a function that is declared with the async keyword. It allows you to use the await keyword inside the function to wait for a promise to resolve before moving on to the next line of code. An async function always returns a promise, and if the function returns a value, it will be wrapped in a resolved promise.
// // const add = async () => {};

// // add();

// //* try catch block is used to handle errors in async/await. If an error occurs in the try block, it will be caught by the catch block, allowing you to handle the error gracefully without crashing the application.

// const fetchData = async () => {
//   try {
//     const user = await fetchUser1();
//     // await keyword is used to wait for the promise returned by fetchUser() to resolve before moving on to the next line of code inside the function only. It will block the execution of the next line until the promise is resolved, and it will return the resolved value of the promise, which is the user object in this case.
//     console.log(user);

//     const error = new Error("Custom error"); // creating a custom error object using the Error constructor, which takes a message as an argument. This error object can be used to represent an error that occurred in the code, and it can be thrown or passed to a reject() function in a promise to indicate that an error has occurred.
//     // throw error;
//     // // throw keyword is used to throw an error, which will be caught by the catch block in the async function. When an error is thrown, it will immediately stop the execution of the current function and jump to the nearest catch block that can handle the error. In this case, the custom error object created above will be thrown, and it will be caught by the catch block in the fetchData() function, allowing you to handle the error gracefully without crashing the application.

//     // console.log(error);

//     // if (error) {
//     //   throw error; // this will throw the custom error object created above, and it will be caught by the catch block in the fetchData() function, allowing you to handle the error gracefully without crashing the application.
//     // }

//     const posts = await fetchPost1(user);
//     // await keyword is used to wait for the promise returned by fetchPost() to resolve before moving on to the next line of code inside the function only. It will block the execution of the next line until the promise is resolved, and it will return the resolved value of the promise, which is the posts object in this case.
//     console.log(posts);

//     const comments = await fetchComments(posts);
//     // await keyword is used to wait for the promise returned by fetchComments() to resolve before moving on to the next line of code inside the function only. It will block the execution of the next line until the promise is resolved, and it will return the resolved value of the promise, which is the comments object in this case.
//     console.log(comments);
//   } catch (error) {
//     console.log("Error:", error);
//   } finally {
//     console.log("finally also executed");
//   }
// };

// fetchData();

// console.log("end");

// ---
//? Understanding difference between
// "https://jsonplaceholder.typicode.com/posts?userId=1" and https://jsonplaceholder.typicode.com/posts/userId/1
// Ans:
// Here, ?userId=1 is a query parameter. Means: “Give me all posts where userId = 1”. So the server: Gets all posts, Filters them, Returns only posts made by user 1.
// And /userId/1 is treated as part of the path. Means: “Go to the resource: posts → userId → 1”. But JSONPlaceholder does NOT have this route. So the server looks for: "/posts/userId/1" Which does not exist ❌

// 🧠 Important Concept: URL Types
//🔹 Query Parameters (?key=value)
// Used for filtering/searching:
// "/posts?userId=1"
// "/products?price=low"
// "/users?age=20"

//TODO: fetch API with async/await:
// https://jsonplaceholder.typicode.com/posts?userId=1
// https://jsonplaceholder.typicode.com/comments?postId=1

//! fetch API with async/await:
const fetchData1 = async () => {
  try {
    // fetchPost
    const postRes = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );
    const posts = await postRes.json();
    console.log("postResponse:", postRes);
    console.log("posts", posts);

    // fetchComment
    const commentRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`,
    );
    const comment = await commentRes.json();
    console.log("commentResponse:", commentRes);
    console.log("comment:", comment);
  } catch (error) {
    console.log("Error:", error);
  }
};

fetchData1();

// // Or,
// //---
// //* Individual way to fetch posts and fetch comment for a user using async/await. This way is more effecient or, code reusable oriented.

// // fetchPost
// const fetchPosts2 = async (userId) => {
//   try {
//     const postRes = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
//     );
//     const posts = await postRes.json();
//     return posts;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// // fetchComment
// const fetchComments2 = async (postId) => {
//   try {
//     const commentRes = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
//     );
//     const comment = await commentRes.json();
//     return comment;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// // fetchData
// const fetchData2 = async () => {
//   try {
//     // fetch posts
//     const posts = await fetchPosts2(1);
//     console.log("posts:", posts);

//     // fetch comments
//     const comment = await fetchComments2(posts[0].id);
//     console.log("comments:", comment);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// fetchData2();
