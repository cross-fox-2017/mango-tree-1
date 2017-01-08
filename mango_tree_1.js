"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.goodFruits = 0
    this.badFruits = 0
    this.status = true
  }

  // Get current states here

  getFruits(){
    this.goodFruits = Math.floor((Math.random() * 10))
    this.badFruits = Math.floor((Math.random() * 10))
  }

  // Grow the tree
  grow() {
    this.age++
    if (this.age < 17) {
      this.height += Math.random()
      this.status = true
    }
    else if (this.age == 30) {
      this.status = false
    }
  }

}

let harvest = new MangoTree()

console.log(`The tree is alive! :smile`);

while (harvest.status == true){
  harvest.grow()
  harvest.getFruits()
  
  console.log(`[Year ${harvest.age} Report] Height = ${harvest.height} m | Fruits harvested = ${harvest.goodFruits + harvest.badFruits} (${harvest.goodFruits} good, ${harvest.badFruits} bad)`);

}

console.log(`The tree has met its end :sad:`);
