"use strict"

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._umur = 0;
    this._tinggi = 0;
    this._qty = 0;
    this._health = true;
  }

  // Get current states here

  // Grow the tree
  grow() {
    // umur bertambah 1, setiap kali method dijalankan
    this._umur++
    if ( this._umur <= 6 ) {
      let tambah_tinggi = Math.random() * 1;
      this._tinggi += tambah_tinggi;
    } else {
      let tambah_tinggi = Math.random() * 1;
      this._tinggi += tambah_tinggi;
      this._health = false
    }
  return this
  }

  // Produce some mangoes
  produceMangoes() {
    // _qty mangga akan bertambah, setiap kali method dijalankan
    this._qty = Math.floor(Math.random() * 10);
    return this
  }

  // Get some fruits
  // _qty akan berubah lagi jadi 0, karena buah dipetik setiap tahun (looping)
  harvest() {
    var jumlahBuah = this._qty;
    this.good = Math.floor(Math.random() * jumlahBuah);
    this.bad = jumlahBuah - this.good
    return `${this._qty} (${this.good} good, ${this.bad} bad)`
    //`banyak buah bagus = ${this.good}, buah jelek = ${this.bad} & isi variabel this._qty = ${this._qty}`
  }

  // cek umur pohon saat ini
  getAge() {
    return `Saat ini pohon berumur ${this._umur} tahun`;
  }
  // cek _tinggi pohon saat ini
  getHeight() {
    return `_tinggi pohon saat ini adalah : ${this._tinggi} Meter`
  }
  // cek banyak nya buah saat ini
  getFruits() {
    return `Banyak buah dalam di tahun ke ${this._umur} adalah ${this._qty} pcs`
  }
  // cek kesehatan pohon di PRODIA terdekat, dengan mengambil sampel zat dari daun ter_tinggi di pohon
  getHealtyStatus() {
    if (this._health == true) {
      console.log("kondisi pohon masih sehat & bahagia :)");
    } else {
      console.log("pohon sudah menua :( ");
    }
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
}

// pohon berhenti di umur 7 tahun
var tree = new MangoTree()
do {
    tree.grow();
    tree.produceMangoes();

    console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(2)} Meter | Fruits Harvested = ${tree.harvest()}`);
} while (tree._health != false)
