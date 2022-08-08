let date = new Date();
// if you call the constructor with no arguments, the date will be the current date and time.

let date2 = new Date(2022, 3, 28, 22, 12, 17);
//        new Date(year, month, day, hour, minute, second);

// months go from 0 to 11(0 = january / 11 = december)

date = date.toLocaleString();
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay(); // Sunday is 0!
let month = date.getMonth(); // January is 0!
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

date2 = date2.toLocaleString();

console.log(date);
console.log(date2);
