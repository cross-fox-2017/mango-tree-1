"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.maxBuah = 20
    this.jumlahBuah = 0
    this.healthy = true
  }

  // Get current states here
  getAge(){
    return this.age
  }
  getHeight(){
    return this.height
  }
  getFruits(){
    return this.jumlahBuah
  }
  getHealtyStatus(){
    return this.healthy
  }
  // Grow the tree
  grow() {
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
}

var tree =  new MangoTree()
console.log(`the tree is alive! :smile:`)

do {
  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harversted}`);
} while (tree.healthy != false)

console.log(`The tree has met its end. :sad:`);
