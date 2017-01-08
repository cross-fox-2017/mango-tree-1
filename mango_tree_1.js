"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age     = 0;
    this._height  = 0;
    this._harvest = 0;
    this._health  = true;
    this._fruits  = [];

  }

  // Get current states here
  getAge(){
    return this._age;
  }

  getHeight(){
    return this._height;
  }

  getHealth(){
    return this._health;
  }

  getFruits(){
    return this._fruits;
  }

  // Grow the tree
  grow() {
    this._age += 1;

    if(this._age <= 10){
      this._height += getRandomNumber();
    }

    if(this._age === 20){
      this._health == false;
    }
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
  //untuk pertumbuhan dll
  return Math.floor(Math.radom() * 9) + 1;
}
