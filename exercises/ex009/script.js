let fullName = "Benito Miyazato";
let emptySpaceIndex = fullName.indexOf(" ");

let firstName = fullName.slice(0, emptySpaceIndex + 1);
let lastName = fullName.slice(emptySpaceIndex + 1);

console.log(firstName);
console.log(lastName);
