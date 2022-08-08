class Animal {
  constructor(rarity, age) {
    this.rarity = rarity;
    this.age = age;
  }

  eat() {
    console.log(`This ${this.species} is eating right now!`);
  }

  sleep() {
    console.log(`This ${this.species} is sleeping right now!`);
  }

  makeLove() {
    console.log(`This ${this.species} is reproducing right now!`);
  }
}

class Rabbit extends Animal {
  species = "rabbit";

  constructor(rarity, age, jumpHeight) {
    super(rarity, age);
    this.jumpHeight = jumpHeight;
  }

  jump() {
    console.log(`Since it's a ${this.species}, his duty is to jump!`);
  }
}

class Bird extends Animal {
  species = "bird";

  constructor(rarity, age, flySpeed) {
    super(rarity, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`Since it's a ${this.species}, his duty is to fly!`);
  }
}

class Fish extends Animal {
  species = "fish";

  constructor(rarity, age, swimSpeed) {
    super(rarity, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`Since it's a ${this.species}, his duty is to swim!`);
  }
}

const fish1 = new Fish("rare", 1, 20);
console.log(fish1.species);
console.log(fish1.rarity);
console.log(fish1.age);
console.log(fish1.swimSpeed);
