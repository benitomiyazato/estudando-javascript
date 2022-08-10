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
