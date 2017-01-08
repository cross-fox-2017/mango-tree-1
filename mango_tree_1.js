"use strict"

class MangoTree {
  
  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._healthy = true
    this._harvested = 0
    this.good = 0
    this.bad = 0
    this.qty = []
  }

  // Get current states here
  getAge() {
    return this._age
  }

  getHeight() {
    return this._height
  }

  getFruits() {
    return this.qty.length
  }

  getHealthyStatus() {
    return this._healthy
  }

  // Grow the tree
  grow() {
    if (this._age == 10) {
      this._healthy = false
    } 
    if (this._age < 10) {
      this._age++
      this._height += getRandomNumber()
    }  
  }

  // Produce some mangoes
  produceMangoes() {
      for (let i = 0; i < getRandomNumber(); i++) {
        if (this._healthy != false) {
          this.qty.push(new Mango)
        }
      }
  }

  // Get some fruits
  harvest() {
    this.good = 0
    this.bad = 0
    this._harvested = this.qty.length

    if (this.qty != []) {
      for (let j = 0; j < this.qty.length; j++) {
        if (this.qty[j].quality == "Good") {
          this.good += 1
        } else {
          this.bad += 1
        }
      }
    }
    
    this.qty = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = quality()
  }
}

function getRandomNumber() {
  return Math.round((Math.random()*10)/3)
}

function quality() {
  if (getRandomNumber() >= 3) {
    return "Good"
  } else {
    return "Bad"
  }
}

//code untuk mengetes program
var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
tree.grow()
tree.produceMangoes()
tree.harvest()

console.log(`[Year ${tree._age} Report]  Height = ${tree._height} m    |  Fruits harvested = ${tree._harvested} (${tree.good} good, ${tree.bad} bad)`)
} while (tree._healthy != false)

console.log(`The tree has met its end. :sad:`)