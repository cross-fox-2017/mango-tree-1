"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.Age = 0;
    this.Height = getRandomNumber();
    this.Quantity = 0;
    this.Health = true;
    this.Quality = [];
    this.badQuality = 0;
    this.goodQuality = 0;
  }

  // Get current states here

  // Grow the tree
  grow() {

    this.Age++;

    if(this.Age <= 10){
      this.Height += getRandomNumber();
    }
    else if(this.Age == 20){
      this.Health = false;
    }


  }

    // Produce some mangoes
  produceMangoes() {
    var fruits = Math.floor((Math.random() * 10)+ 1);
    this.Quantity = fruits;

    for(var i = 0; i < this.Quantity;i++){
      var buah = new Manggo;
      buah.qualitymango();
      this.Quality.push(buah._kualitas);
      if(buah._kualitas == "bad"){
        this.badQuality += 1;
      }else{
        this.goodQuality += 1;
      }

    }
  }

  resetHarvest(){
    this.badQuality = 0;
    this.goodQuality = 0;
    this.Quality = [];
  }
  // Get some fruits

}


function getRandomNumber() {
  var num = Math.random() * 1;
  return num;
}

class Manggo{
  constructor(){
    this._kualitas = "";
  }

  qualitymango(){
    var qualitys = ['bad','good']
    this._kualitas = qualitys[Math.round(Math.random()*1)];
  }
}


var tree = new MangoTree();
console.log('The tree is alive! :smile:')

do {
  tree.grow();
  tree.produceMangoes();


  console.log(`[Year ${tree.Age}] Height = ${Math.floor(tree.Height)} Meter | Fruit Harvested = ${tree.Quantity} (${tree.goodQuality} good, ${tree.badQuality} bad)`);
  tree.resetHarvest();} while (tree.Health != false)

console.log(`The tree has met its end. :sad:`);
