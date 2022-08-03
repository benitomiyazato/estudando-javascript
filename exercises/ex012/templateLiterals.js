// template literals allows you to use placeholders in your strings.

let username = "Jorge";
let age = "55000";
let money = "333";

console.log(
  `Hello,${username}! You are ${age} years old... and have $${333} in your bank account`
);

// or you can put it into a string

let text = `Hello,${username}! You are ${age} years old... and have $${333} in your bank account`;
console.log(text);
