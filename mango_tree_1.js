"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.ages = 0;
    this.heights = 0;
    this.fruits = 0;
    this.health = true;
  }

  // Get current states here

  get age() {
    return this.ages;
  }
  set age(age) {
    this.ages = age;
  }

  get height() {
    return this.heights;
  }
  set height(height) {
    this.heights = height;
  }

  get fruit() {
    return this.fruits;
  }
  set fruit(fruit) {
    this.fruits = fruit;
  }

  get healthy() {
    return this.health;
  }
  set healthy(health) {
    this.health = health;
  }

  // Grow the tree
  grow() {
    this.ages++;
    if (this.heights < 4.8 && this.ages < 20) {
      this.heights += getRandomNumber();
    }
    if (this.heights > 4.8) {
      this.heights += 0;
    }
    if (this.ages == 20) {
      this.health = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = [];
    let qty = Math.floor((Math.random() * 15));
    for (let i = 0; i < qty; i++) {
      let mango = new Mango();
      mango.assignCondition();
      this.fruits.push(mango);
    }
  }

  // Get some fruits

  fruitDetails() {
    let goodCount = 0;
    let badCount = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i]["condition"] == "good") {
        goodCount++;
      }
      else {
        badCount++;
      }
    }
    return `(${goodCount} good ${badCount} bad)`;
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.condition = "";
  }

  assignCondition() {
    let arrCond = ["bad", "good"];
    let random = Math.floor((Math.random() * 2) + 1) - 1;
    this.condition = arrCond[random];
  }
}

function getRandomNumber() {
  let number = Math.round((Math.random() * 4) + 1) / 10;
  return number;
}

var tree = new MangoTree();
let mango = new Mango();

console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.fruit.length} ${tree.fruitDetails()}`);
} while (tree.healthy === true)

console.log(`The tree has met its end. :sad:`);
