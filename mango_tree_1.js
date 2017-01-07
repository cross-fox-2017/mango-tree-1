"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0.0
    this._fruits = []
    this._healty = true
  }

  // Get current states here
  getAge(){
    return this._age += 1
  }
  getHeight(){
    return this._height.toFixed(1)
  }
  getFruits(){
    return this._fruits
  }
  getHealty(){
    return this._healty
  }
  // Grow the tree
  grow() {
    if (this._age <= 10) {
      this._height += getRandomNumber() / 10
      // console.log(this._height);
    }
    if (this._age === 20) {
      this._healty = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (var i = 0; i < getRandomNumber(); i++) {
      this._fruits.push(new Mango)
      // console.log(this._fruits);
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    this._harvest = this._fruits.length
    return this._harvest
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this._fruitStatus = getRandomNumber()
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}

var tree = new MangoTree()

// tree.grow()
// console.log(tree.produceMangoes());

do {
  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree.getAge()} Report] Height = ${tree.getHeight()} | Fruits harvested = ${tree.harvest()}`);
} while (tree.getHealty() != false);

console.log(`The tree has met its end. :sad:`);
