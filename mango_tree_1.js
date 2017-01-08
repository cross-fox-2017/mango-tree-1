"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age=0,height=0,totFruit=[],harvested=' ',healthy=true) {
    this.age = age;
    this.height = height;
    this.harvested = harvested;
    this.healthy = healthy;
    this.totFruit= totFruit
  }

  get states(){

  }

  // Grow the tree
  grow() {
    if(this.age===20){
      this.healthy = false;
    }
    else{
    if(this.height<=4.8){
      this.height = this.height + getRandomNumber()/10
      if(this.height>=4.8){
        this.height=4.8;
      }
    }
    if(this.age<20){
      this.age++
    }
  }

  }

  // Produce some mangoes
  produceMangoes() {
    var mango= new Mango;
    for(var i=0; i<getRandomNumber();i++){
      this.totFruit.push(mango.quality());
    }
    return this.totFruit;
  }

  // Get some fruits
  harvest() {
    var bad=0;
    var good=0;

    for(var i=0; i< this.totFruit.length;i++){
      if(this.totFruit[i]=== "Good"){
        good++ ;
      }
      else{
        bad++ ;
      }
    }
    this.harvested = `${this.totFruit.length} (${bad} bad , ${good} good ) `
    this.totFruit =[]

  }
}

class Mango {
  // Produce a mango
  constructor(kualitas) {
    this.kualitas=  kualitas;
  }
    quality(num=Math.round(Math.random())){
      if(num===1){
        return this.kualitas = "Good"
      }
      else if (num===0) {
        return this.kualitas = "Bad"
      }
    }
}

function getRandomNumber() {
  return Math.floor((Math.random()*10)+1);
}

var mangoes = new Mango()
var  tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do{
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height.toString().substring(0,3)} m | Fruits harvested = ${tree.harvested}`);
} while(tree.healthy != false);

console.log(`The tree has met its end! :sad:`)
tree.produceMangoes();
