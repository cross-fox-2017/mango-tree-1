"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.maxBuah = 20
    this.jumlahBuah = []
    this.healthy = true
    this.harvested = 0
    this.good = 0
    this.bad = 0
  }

  // Get current states here
  getAge(){
    return this.age
  }
  getHeight(){
    return this.height
  }
  getFruits(){
    return this.jumlahBuah.length
  }
  getHealtyStatus(){
    return this.healthy
  }
  // Grow the tree
  grow() {
    if (this.age < 20){
      this.age++
      var plus = getRandomNumber()/10
      this.height += Number(plus.toPrecision(4))
    } else {
      this.healthy = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.healthy == true){
      for (let i = 0; i < getRandomNumber(); i++) {
        this.jumlahBuah.push(new Mango)
      }
    }
  }

  // Get some fruits
  harvest() {
    this.bad = 0
    this.good = 0
    this.harvested = this.jumlahBuah.length
    if (this.jumlahBuah != []){
      for (let i = 0; i < this.jumlahBuah.length; i++) {
        if (this.jumlahBuah[i].quality == "Bad"){
          this.bad += 1
        } else {
          this.good += 1
        }
      }
    }
    this.jumlahBuah = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.name = "Mango"
    this.quality = quality()
  }
}

function quality(){
  if (getRandomNumber() < 5){
    return "Bad"
  } else {
    return "Good"
  }
}
function getRandomNumber() {
  return Math.floor(Math.random()*10)+1
}

var tree =  new MangoTree()
console.log(`the tree is alive! :smile:`)

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested} (${tree.good} good, ${tree.bad} bad)`);
} while (tree.healthy != false)

console.log(`The tree has met its end. :sad:`);
