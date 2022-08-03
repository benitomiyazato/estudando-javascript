let prices = [5, 10, 15, 20, 25];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

// ---------------------------------

for (let price of prices) {
  // it is basically the same as Java's foreach
  console.log(price);
}
