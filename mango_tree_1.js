"use strict"

class MangoTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = 0
    this._healthy = true
  }

  grow(){
    this._age++
    if (this._age < 23) {
      this._height += getRandomNumber() / 10
    }
    if (this._age == 30) {
      this._healthy = false
    }
  }

  age(){
    return this._age
  }

  produceMangoes(){
    for (var a = 0; a < getRandomNumber() * 10; a++) {
      this._fruits.push( new Mango() )   // class mango dipake buat ngisi array fruits (push). isinya either 'good' or 'bad'
    }
  }

  harvest(){
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

// buat generate mango dengan kualitas good or bad
class Mango {
  constructor() {
    let status = ['good', 'bad']
    this._quality = status[Math.floor(Math.random() *2)]
    return this._quality
  }
}

// generate random number 0-1
function getRandomNumber () {
  return Math.random()
}

// Driver code
console.log(`\nThe tree is alive! :smile:\n`);

let tree = new MangoTree()

while (tree._healthy !== false){
  //console.log(tree._fruits);
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvested} ${tree._goodFruits} good ${tree._badFruits} bad`);

}

console.log(`\nThe tree has met its end :sad:\n`);
