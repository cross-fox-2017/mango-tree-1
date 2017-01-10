"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0.0
    this._fruits = []
    this._harvested = 0
    this._healty = true
    //this._status = []
  }

  // Get current states here
  getAge(){
    return this._age
  }

  getHeight(){
    return this._height
  }

  getFruits(){
    return this._fruits.length
  }

  getHealtyStatus(){
    return this._healty
  }

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= 10){
      this._height += (2-getRandomNumber())*getRandomNumber()
    }
    if(this._age === 20){
      this._healty = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for(var n=1; n <= Math.floor(getRandomNumber()*15)+10; n++){
        this._fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    this._goodFruit = 0
    this._badFruit = 0
    this._harvested = this._fruits.length
    for(var i=0; i<this._fruits.length; i++){
      if(this._fruits[i]._quality === 'good'){
        this._goodFruit +=1

      }
      else{
        this._badFruit +=1
      }
    }
    // this._fruits.forEach((fruit) => {
    //   if(fruits._quality === 'good'){
    //     this.goodFruit +=1
    //   }
    //   else{
    //     this._badFruit +=1
    //   }
    // })

    this._fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    let status = ['good','bad']
    this._quality = status[Math.floor(Math.random()*2)]
  }
}

function getRandomNumber() {
  return Math.random()
}

var tree = new MangoTree()
console.log('The tree is alive! :smile: ')

do{
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested} | Bad Fruits = ${tree._badFruit} | Good Fruits = ${tree._goodFruit}`)
}while(tree._healty != false)

console.log("The tree has met its end :sad: ")
