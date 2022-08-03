// the Spread operator unpackages an iterable object into singular arguments.
let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 78, 9];
let maxNumber = Math.max(...numbers);

console.log(maxNumber);

let class1 = ["Matheus", "Jorge", "Bernardo"];
let class2 = ["Junior", "Juliano", "Janaina"];

class1.push(...class2);
console.log(...class1);
