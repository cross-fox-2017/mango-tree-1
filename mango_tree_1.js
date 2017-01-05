"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
  }

  // Get current states here

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
} while (tree._healthy != false)

console.log(`The tree has met its end. :sad:`);
