function sum(num1, num2, ...numbers) {
  let total = num1 + num2;
  for (number of numbers) {
    total += number;
  }
  return total;
}

// rest parameters works just like Java's VarArgs -> it takes the arguments and packs them into an array
