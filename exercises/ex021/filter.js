// array.filter() creates a new array with all the
// items that passed the test specified by a callback function

let ages = [16, 23, 54, 71, 12, 37];
let agesGreaterThan30 = ages.filter(filterGreaterThan30);
console.log(agesGreaterThan30);

function filterGreaterThan30(element) {
  return element > 30 ? true : false;
}
