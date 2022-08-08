class Animal {
  species;

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
  jump() {
    console.log(`Since it's a ${this.species}, his duty is to jump!`);
  }
}

class Bird extends Animal {
  species = "bird";
  fly() {
    console.log(`Since it's a ${this.species}, his duty is to fly!`);
  }
}

class Fish extends Animal {
  species = "fish";
  swim() {
    console.log(`Since it's a ${this.species}, his duty is to swim!`);
  }
}
