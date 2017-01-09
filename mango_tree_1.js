"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.Age = 0;
    this.Height = getRandomNumber();
    this.Quantity = 0;
    this.Health = true;
  }

  // Get current states here

  // Grow the tree
  grow() {

    this.Age++;

    if(this.Age <= 10){
      this.Height += getRandomNumber();
    }
    else if(this.Age == 20){
      this.Health = false;
    }


  }

  // Produce some mangoes
  produceMangoes() {
    var fruits = Math.floor((Math.random() * 10)+ 1);
    return this.Quantity = fruits;

  }

  // Get some fruits
  harvest() {
    return this.produceMangoes();
  }
}


function getRandomNumber() {
  var num = Math.random() * 1;
  return num;
}

var tree = new MangoTree();
console.log('The tree is alive! :smile:')

do {
  tree.grow();
  tree.produceMangoes();

  console.log(`[Year ${tree.Age}] Height = ${Math.floor(tree.Height)} Meter | Fruit Harvested = ${tree.harvest()}`);
} while (tree.Health != false)

console.log(`The tree has met its end. :sad:`);
