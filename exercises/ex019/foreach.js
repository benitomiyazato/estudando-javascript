let names = ["spongebob", "patrick", "squidward"];

names.forEach(firstLetterUpperCase);
names.forEach((n) => console.log(n));

function firstLetterUpperCase(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
