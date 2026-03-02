// // sync => blocking
// // async => non-blocking

// const add = (a, b) => {
//     console.log(a + b);
// }

// console.log("start");
// add(1, 2); // add functions or JS nature is sync, it will block the next line until it finishes
// console.log("processing");
// console.log("end");

// // async example
// //! setTimeout
// // setTimeout(calllback, timeout, ...arguments)

// console.log("start");
// const timerId = setTimeout((name, age) => {
//     console.log(name, age);
//     console.log("processing");
// }, 1000, "John", 25);   // this will be executed after 1 second, it is async, it will not block the next line

// console.log("timerId:", timerId); // timerId is a unique identifier for the timer, it can be used to clear the timer

// // clearTimeout(timerId); // this will clear the timer, it will not execute the callback function So, if you want to cancel the timer, you can use clearTimeout function with the timerId
// console.log("timerId:", timerId);

// console.log("end");

// // outpus:
// // start
// // end
// // processing (after 1 second)

// //! setInterval
// // setInterval(callback, interval, ...arguments)
// let count = 0;
// const timerId1 =setInterval(() => {
//     console.log(count);
//     // console.log("processing");

//     if(count === 10){
//         clearInterval(timerId1); // this will clear the timer, it will stop the interval, it will not execute the callback function anymore
//     }

//     count++;
// }, 1000); // this will execute the callback function every 1 second, it is async, it will not block the next line)

// console.log("end");

// // outputs:
// // end
// // processing (every 1 second)

// // fetchUser is a function that simulates fetching user data from a server. It uses setTimeout to mimic an asynchronous operation that takes 2 seconds to complete. When the function is called, it will log "user fetched" after 2 seconds, while the rest of the code continues to execute without waiting for the fetchUser function to finish. When the function is not called, it will not log anything.
// const fetchUser1 = () => {
//     setTimeout(() => {
//         console.log("user fetched");
//     }, 2000);
// };

// fetchUser1(); // this will call the fetchUser1 function, it will execute the callback function after 2 seconds, it is async, it will not block the next line

// console.log("end");

// // outputs:
// // end
// // user fetched (after 2 seconds)

//
const fetchUser = (callback) => {
  setTimeout(() => {
    console.log("user fetched");
    callback(null, { name: "John", age: 25 }); // this will call the callback function having the arguments null and object  after the user is fetched, it is async, it will not block the next line
  }, 2000);
};

const fetchPost = (user, callback) => {
  setTimeout(() => {
    console.log(user);
    console.log("post fetched for user:", user.name);
    callback(null, [
      // this will call the callback function having the arguments null and array of objects after the post is fetched, it is async, it will not block the next line
      { id: 1, userId: user.name, title: "Post 1" },
      { id: 2, userId: user.name, title: "Post 2" },
    ]);
  }, 1000);
};

const fetchComment = (post, callback) => {
  setTimeout(() => {
    callback(null, [{ postId: post.id, id: 1, content: "comment 1" }]);
  }, 1000);
};

//fetchUser(callback)
//i.e. fetchUser(err, data)
// this will call the fetchUser function, it will execute the callback function after 2 seconds, it is async, it will not block the next line
fetchUser((err, user) => {
  // this is the callback function inside fetchUser that will be called after the user is fetched, it will execute the callback function after 2 seconds, it is async, it will not block the next line
  if (err) {
    console.log("error fetching user:", err);
    return;
  }

  //fetchPost(user, callback)
  // this will call the fetchPost function after the user is fetched, it will execute the callback function after 1 second, it is async, it will not block the next line
  fetchPost(user, (err, data) => {
    // this is the callback function inside fetchPost that will be called after the post is fetched, it will execute the callback function after 1 second, it is async, it will not block the next line
    if (err) {
      console.log("error fetching post:", err);
      return;
    }
    console.log("posts:", data);

    // fetch comments
    // fetchComment(postMessage, callback)
    fetchComment(data[0], (err, comments) => {
      if (err) {
        console.log("err");
        return;
      }
      console.log("comments fetched for post:", data[0].title);
      console.log("comments:", comments);
    });
  });
});

console.log("end");
// outputs:
// end
// user fetched (after 2 seconds)
// post fetched (after 3 seconds)

// callback hell: when we have multiple nested callbacks, it becomes difficult to read and maintain the code. It is also known as "pyramid of doom" because of the shape of the code. To avoid callback hell, we can use promises or async/await.
// solution to callback hell: promises and async/await
