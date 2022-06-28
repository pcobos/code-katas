let setTimeoutPromise = (delay) => {
  return new Promise((resolve, reject) => {
    if (delay < 0) return reject("Delay must be greater than 0");

    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`);
    }, delay);
  });
};

// Following code snipped is how things would be done with a promise
setTimeoutPromise(250)
  .then((msg) => {
    console.log(msg);
    console.log("First timeout");
    return setTimeoutPromise(500);
  })
  .then((msg) => {
    console.log(msg);
    console.log("Second timeout");
  });
