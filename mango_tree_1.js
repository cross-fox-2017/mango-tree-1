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
    for(var n = 0; n <= getRandomNumber() * 10; n++) {
      this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    this._harvested = this._fruits.length
    this._goodFruits = 0
    this._badFruits = 0

    for (var x = 0; x < this._fruits.length; x++) {
      if ( this._fruits[x]['_quality'] == 'good') {
        this._goodFruits++
      }
      if (this._fruits[x]['_quality'] == 'bad') {
        this._badFruits++
      }
    }
      this._fruits = []
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

  console.log(`[Year ${tree._age} Report] Height = ${tree._height.toFixed(2)} | Fruits harvested = ${tree._harvested} ${tree._goodFruits} Good ${tree._badFruits} Bad`)
} while (tree._health != false)

console.log(`The tree has met is end! :bad:`)
