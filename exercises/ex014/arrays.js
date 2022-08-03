let fruits = ["banana", "apple", "kiwi", "strawberry"];
console.log(fruits);

let newLength = fruits.push("orange"); // push methods adds a new element to the end of the array.
console.log(fruits);
console.log(newLength);

let lastFruit = fruits.pop(); // removes the last element of the array and returns it;
console.log(fruits);
console.log(lastFruit);

let firstFruit = fruits.shift; // removes the first element of the array and returns it;
console.log(fruits);
console.log(firstFruit);

let newLength2 = fruits.unshift("grapefruit"); // adds a new element to the start of the array, and returns its new lenght;
console.log(fruits);
console.log(newLength2);

let length = fruits.length;
console.log(length);

let indexOfApple = fruits.indexOf("apple");
console.log(`The index of apple is: ${indexOfApple}`);
