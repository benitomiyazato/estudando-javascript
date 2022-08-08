class Car {
  constructor(ownerName, price) {
    this._ownerName = ownerName;
    this._price = price;
  }
  get ownerName() {
    return `${this._ownerName} COSTA DA SILVA`;
  }

  get price() {
    return `R$${this._price}`;
  }
}

const car1 = new Car("Junior", 1500);
console.log(car1.ownerName);
console.log(car1.price);
