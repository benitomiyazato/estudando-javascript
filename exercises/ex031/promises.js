// synchronous code = linear process, step-by-step linear instructions
// asynchronous code = Out of Sequence.

// promises = its a promise that it will return something in the future. its a result from an asynchronous operation.
// they have a STATE = it starts as "pending", and then go to 'fullfilled' or 'rejected'.

const promise = new Promise((resolve, reject) => {
  let fileIsLoaded = true;
  if (fileIsLoaded) {
    resolve("The promise loaded the file succesfully");
  } else {
    reject("The system ran into an exception!");
  }
});

promise
  .then((value) => console.log(value + " -> logging in the .then() method"))
  .catch((error) => console.log(error));

// the resolve methhod doesnt necessairily need to return anything
// also, you can pass arguments in a promise
const promise2 = (timeToWait) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeToWait);
  });

let milliseconds = 5000;
promise2(milliseconds).then(() =>
  console.log(`Thanks for waiting! You waited ${milliseconds / 1000}s!`)
);
