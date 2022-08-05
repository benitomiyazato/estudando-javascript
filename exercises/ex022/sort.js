// .sort() method => sorts an array, the CompareFunction is supposed to return negative if the first argument is lesser than the second

let values = [5, 2, 4, 9, 8, 1, -1];
values = values.sort(descendingSort);
console.log(values);

function descendingSort(a, b) {
  return b - a;
}

let letters = ["a", "f", "h", "t", "q", "a", "c", "g", "y"];
letters = letters.sort();
console.log(letters);
