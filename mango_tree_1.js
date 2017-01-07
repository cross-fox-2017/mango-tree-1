"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
        this._umur = 0;
        this._tinggi = getRandomHeight();
        this._qty = 0;
        this._health = true;
  }

  //Get current states here


  // Grow the tree
  grow(){

    this._umur++;

      if(this._umur  == 20)
      {
        this._health = false;

      }else{

          this._tinggi += getRandomHeight();
      }

  }

  // Produce some mangoes
  produceMangoes() {

      return this._qty = getRandomFruits();
  }

  // Get some fruits
  harvest() {

      return this.produceMangoes();
  }
}


function getRandomFruits() {
      var num = Math.floor((Math.random() * 9) + 1);
      return num;
}

function getRandomHeight(){

      var num = Math.random() * 1;
      return num;

}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
    tree.grow();
    tree.produceMangoes();

    console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(2)} Meter | Fruits Harvested = ${tree.harvest()}`);
} while (tree._health != false)

console.log(`The tree has met its end. :sad:`);
