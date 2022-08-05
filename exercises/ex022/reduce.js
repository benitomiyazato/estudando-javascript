// array.reduce() reduces an array to a single element
let values = [5, 10, 15, 25, 30, 35, 40, 45];
values = values.reduce((a, b) => a + b);
console.log(values);

let values2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
values2 = values2.reduce(sumAllElements);
console.log(values2);

function sumAllElements(previousValue, currentValue) {
  return previousValue + currentValue;
}
