"use strict"

class MangoTree {
  
  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.capacity = 0;
    this.fruit = 0;
    this.health = true;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.getAge();
    this.getHeight();
    this.getFruits();
    this.getHealthyStatus();
  }

  getAge() {
    return this.age += 1;
  }

  getHeight() {
    if(this.height >= 4.8){
      return this.height;
    } else {
      return this.height += random();
    }  
  }

  getFruits() {
    return this.fruit = Math.floor(Math.random() * 15) + 1;
  }

  getHealthyStatus() {
    if(this.age === 20){
      return this.health = false;
    }
  }
}

let tree = new MangoTree();

class Mango {
  constructor() {
    this.condition = [0,0];
  }

  MangoCondition(fruit) {
    let addGood = 0;
    let addBad = 0
    let jumlah = fruit;
    for(let i = 0; i < jumlah; i++){
      let randomIndex = Math.floor((Math.random() * 2));
      if(randomIndex === 0){
        addGood += 1
        this.condition[0] = addGood;
      }
      else {
        addBad += 1
        this.condition[1] = addBad;
      }
    }
    return this.condition
  }
}

let mango = new Mango();


function random() {
  let number = Math.random();
  let rounded = Math.round(number * 6) / 10;
  return rounded;
}

console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  mango.MangoCondition(tree.fruit);

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.fruit} (${mango.condition[0]} good, ${mango.condition[1]} bad)`)
} while (tree.health === true)

console.log(`The tree has met its end. :sad:`);