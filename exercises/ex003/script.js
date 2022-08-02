// Type  Conversion

let age = window.prompt("Tell me your age!");
document.write("Your data type is: ", typeof age);
age = Number(age);
age += 1;
document.write("You are ", age, " years old! Your data type is: ", typeof age);

let x;
let y;
let z;

x = Number("3.14"); // "string '3.14' => number 3.14"
y = String(3.14); // number 3.14 =; string '3.14';
z = Boolean("pizza"); // empty == false, not empty == true;

