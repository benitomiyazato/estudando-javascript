// array.map) -> executes a provided callback
// function for each element of the array
// and returns and array with the result of the operation

let names = ["Helena", "Jorge", "Carlos"];
names = names.map((a) => a.toUpperCase());
names.forEach(printArray);

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map(square);
numbers.forEach(printArray);

function square(element) {
  return Math.pow(element, 2);
}

function printArray(element) {
  console.log(element);
}
