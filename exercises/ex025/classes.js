class Player {
  constructor(name, age, rpgClass) {
    this.name = name;
    this.age = age;
    this.rpgClass = rpgClass;
  }

  kill() {
    console.log(`Player ${this.name} is killing a zombie`);
  }

  makeFire() {
    console.log(`Player ${this.name} is making fire with a stick!`);
  }
}

const player1 = new Player("Fulano", 21, "Mage");
const player2 = new Player("Beltrano", 25, "Archer");

player1.kill();
player1.makeFire();

player2.kill();
player2.makeFire();
