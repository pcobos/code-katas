let setTimeoutPromise = (delay) => {
  return new Promise((resolve, reject) => {
    if (delay < 0) return reject("Delay must be greater than 0");

    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`);
    }, delay);
  });
};

// Following code snipped is how things would be done with a promise
// setTimeoutPromise(250)
//   .then((msg) => {
//     console.log(msg);
//     console.log("First timeout");
//     return setTimeoutPromise(500);
//   })
//   .then((msg) => {
//     console.log(msg);
//     console.log("Second timeout");
//   });
let doSomething = async () => {
  let msg1 = await setTimeoutPromise(250);
  console.log(msg1);
  console.log("First timeout");

  let msg2 = await setTimeoutPromise(500);
  console.log(msg2);
  console.log("First timeout");
};

doSomething();
