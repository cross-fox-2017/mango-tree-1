"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healty = true
  }

  // Get current states here
  getAge(){
    return this._age += 1
  }
  getHeight(){
    return this.Height
  }
  getFruits(){
    return this._fruits
  }
  getHealty(){
    return this.healty
  }
  // Grow the tree
  grow() {
    if (this._age <= 10) {
      this._height += getRandomNumber() / 10
      console.log(this._height);
    }
    if (this._age === 20) {
      this._healty = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}

var tree = new MangoTree()

tree.grow()
