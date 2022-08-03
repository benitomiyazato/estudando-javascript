// callbacks = a function passed as an argument to another function
// it ensures that the argument function will only be executed after a certain task has finished.
//its also useful for developing asynchronous code.

sum(a, b, displayConsole);

function sum(a, b, callbackFunction) {
  let sumResult = a + b;
  callbackFunction(sumResult);
}

function displayConsole(output) {
  console.log(output);
}
