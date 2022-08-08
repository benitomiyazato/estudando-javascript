// Map = an object that stores data with Key and Value

let store = new Map([
  ["t-shirt", 50],
  ["pants", 75],
  ["socks", 15],
  ["underwear", 25],
]);

store.forEach((value, key) => console.log(key + " R$" + value));

// get method => gets the value of a specified key
console.log(`Preço: R$${store.get("pants")}!`);

// set method => sets a new pair of data
store.set("hat", 40);
console.log(`Hat => Preço: R$${store.get("hat")}!`);

// delete method => deletes a pair of data
store.delete("hat");
console.log(`Is there a hat? ${store.has("hat")}`);
