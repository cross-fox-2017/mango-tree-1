"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.healthy = true;
    this.buah = 0;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.umur++
    if(this.umur <= 10) {
      this.tinggi += Math.random()*2;
    }
    if(this.umur == 20){
      this.healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.buah = getRandomNumber();
  }

  // Get some fruits
  harvest() {

  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.bagus = 0
    this.buruk = 0
  }

  mangoQuality(){
    this.bagus = Math.ceil(Math.random()*tree.buah);
    this.buruk = tree.buah - this.bagus;
    // if(this.buruk < 0) {
    //   mangoQuality()
    // }
  }
}

function getRandomNumber() {
  return Math.ceil(Math.random()*50);
}
console.log(getRandomNumber());
var tree = new MangoTree()
var mango = new Mango()

console.log(`The tree is alive! :smile:`)

do {
  tree.grow()
  tree.produceMangoes()
  mango.mangoQuality()
console.log(`[Year ${tree.umur} Report] Height = ${tree.tinggi} | Fruits harvested = ${tree.buah} | Good: ${mango.bagus} & Bad: ${mango.buruk}`);
} while (tree.healthy != false)

console.log('The tree has met its end.:sad:')
