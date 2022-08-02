let x = 3.14;
console.log("round", Math.round(x)); // rounds to the nearest integer
console.log("random", Math.random()); // random number between 0 and 1
console.log("floor", Math.floor(3.823)); // always rounds the number down.
console.log("ceil", Math.ceil(3.823)); // always rounds the number up (ceilling)
console.log("pow", Math.pow(x, 3));
console.log("abs", Math.abs(-3.14)); // the distance between the number and zero

let num1 = 5;
let num2 = 9;
let num3 = 2;

let maximum = Math.max(num1, num2, num3);
console.log("maximum", maximum);

let minimum = Math.min(num1, num2, num3);
console.log("minimum", minimum);

console.log("PI const", Math.PI);
