"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age =0,height =0,fruits=0,healthy=true) {
    this.age = age;
    this.height =height;
    this.fruits =fruits;
    this.healthy =healthy;
  }
  // Get current states here
  // Grow the tree
  grow() {
    while(this.age <20){

    this.age += 1;
      if(this.age >14){
      this.height = this.height;
      }else{
      this.height += Math.round(Math.floor(Math.random() * 90 + 10)*10)/100
      }
     return `[Year ${this.age} Report] Height ${this.height} m`;
    }

    return this.healthy = false;


  }

  gethealthy(){
    // console.log(this.healthy)

    return this.healthy;
  }
  getAge(){
    return this.age;
  }

  getHeight(){
    return this.height;
  }
  // Produce some mangoes
  produceMangoes() {
      return this.harvest();
  }

  // Get some fruits
  harvest(){

    // let rand =  Math.floor(Math.random()*9);
    //  this.fruits = rand;
    // let good = Math.floor(Math.random()*rand);
    // // console.log(good);
    // let bad = this.fruits -  good;
    var mangoes = new Mango(); //array
    let bad = []
    let good = []
    this.fruits = mangoes.length
    for(let i=0; i<mangoes.length;i++){
      if(mangoes[i] != "bad"){
        good.push(mangoes[i])
      }else{
        bad.push(mangoes[i])
      }
    }
    return `Fruits harvested = ${this.fruits}(${good.length} good, ${bad.length} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.mango = [];
    let quality = ["good","bad"];
    let temp = [];
    let rand =  Math.floor(Math.random()*9);
    for(let i=0;i<rand;i++){
      this.mango.push(quality[getRandomNumber()])
    }
    // console.log(this.mango);
    return this.mango
  }
}

function getRandomNumber() {
var rand = Math.round(Math.random())
return rand;
}



var tree = new MangoTree();
// console.log(tree.harvest())

do {
  tree.grow();
  tree.produceMangoes();

  console.log(`[Year ${tree.age} Report] Height = ${tree.height}m | ${tree.harvest()}`)
}while(tree.healthy != false)

console.log(`Tree die`)

// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
//
// console.log(tree.grow())
// console.log(tree.produceMangoes())
// console.log(tree.gethealthy())
// tree.getAge();
// console.log(tree.getHeight());
