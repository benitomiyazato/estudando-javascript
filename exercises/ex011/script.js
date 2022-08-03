// let = this variable will die outside the curly braces.
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// var = this variable can escape a set of curly braces.

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// var = even though VAR can escape a set of curly braces, it cannot escape a function.

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
console.log(i);

// it is a good practice to, when declaring global variables, use LET. that's because VAR can intefere in the window object properties
