// 2d array = an array of arrays.

let fruits = ["apple", "orange", "banana", "kiwi", "strawberry"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["cow", "chicken", fish];

let groceryList = [fruits, vegetables, meats];
for (let list of groceryList) {
  for (let item of list) {
    console.log(item);
  }
}
