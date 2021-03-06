// A promise takes one parameter (a function) with two variables (resolve & reject)
let myPromise = new Promise((resolve, reject) => {
  let promiseResult = 1 + 1;
  if (promiseResult == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

// Once the promise has been resolved, we THEN want to do something
// For that, we use the .then() method, which can take up to two arguments
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    // Catch will catch any error (our reject states)
    console.log(message);
  });

const userLeft = true;
let secondPromise = new Promise((resolve, reject) => {
  if (userLeft) {
    reject({
      name: "User Left",
      message: "Sorry!",
    });
  } else {
    resolve("Thanks for staying");
  }
});

secondPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message.name + " " + message.message);
  });
