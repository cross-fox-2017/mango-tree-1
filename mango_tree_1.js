"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0.0
    this._fruits = []
    this._harvested = 0
    this._health = true
  }

  // Get current states here
  getAge() {
    return this._age
  }

  getHeigth() {
    return this._height
  }

  getFruits() {
    return this._height.length
  }

  getHealthyStatus() {
    return this._health
  }

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= 10) {
      this._height = getRandomNumber() / 10
    }
    if(this._age === 20){
      this._health = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for(var n = 1; n <= getRandomNumber() * 5; n++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    this._goodFruit = 0
    this._badFruit  = 0

    this._harvested = this._fruits.length
    this._fruits.forEach((fruit) => {
      if(fruit._quality == 'good') {
        this._goodFruit += 1
      } else {
        this._badFruit += 1
      }
    })
    this.fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    let status = ['good', 'bad']
    this._quality = status[Math.floor(Math.random() * 2)]
  }
}

function getRandomNumber() {
  return Math.random()
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested} ${tree._goodFruit} Good ${tree._badFruit} Bad`)
} while (tree._health != false)

console.log(`The tree has met is end! :bad:`)
