"use strict"

class MangoTree {

  constructor() {
    this._umur=0;
    this._tinggi=0;
    this._fruits=0;
    this._health=true;
  }

  grow() {
    var tinggi=Math.random();
    this._umur++;
    if(this._umur<=10){
      this._tinggi+=tinggi;
    }
    if(this._umur==20) {
      this._health=false;
    }
  }

  produceMangoes() {
    return this._fruits = getRandomNumber();
  }

  harvest() {
    var jumlah = this.produceMangoes();
    var good = Math.floor((Math.random() * jumlah) + 1);
    var bad = jumlah - good;
    return jumlah+' ('+good+' good, '+bad+' bad)';
  }
}

function getRandomNumber() {
  var num = Math.floor((Math.random() * 9) + 1);
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
