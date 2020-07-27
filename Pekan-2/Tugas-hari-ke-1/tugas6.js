//soal1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
  nama : "Asep",
  jenisKelamin: "laki-laki",
  hobi : "baca buku",
  tahunLahir : 1992
  }
console.log("NOMOR 1")
console.log(objectDaftarPeserta.nama + " " +  objectDaftarPeserta.jenisKelamin + " " + objectDaftarPeserta.hobi + " " + objectDaftarPeserta.tahunLahir )


//soal2
var buah = [
  {
    nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: 9000
  }, 
  {
    nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: 8000
  }, 
  {
    nama: "semangka", warna: "biru", ada_bijinya: "ada", harga: 10000
},
{
  nama: "Pisang", warna: "kuning", ada_bijinya: "tidak", harga: 5000
}]

console.log("NOMOR 2")
console.log(buah[0])

//soal3
var dataFilm = []
var tambahDataFilm = {
  nama : "Ipman",
  durasi : "120 menit",
  genre : "laga",
  tahun : 2008
}
function iniAku(tambahDataFilm){
  dataFilm.push(tambahDataFilm)  
   return dataFilm
}
console.log("NOMOR 3")
console.log(iniAku(tambahDataFilm));


//soal4
//release0
class Animal {
  constructor(name){
    this.name = name;
    this.legs =4;
    this.cold_blooded = false;
  }
}
var sheep = new Animal("shaun");
console.log("NOMOR 4") 
console.log("RELEASE 0") 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release1
class Ape {
  constructor (name) {
    this.name = name;
  }
  yell(){
    return "Auooo";
  }
}
class Frog{
  constructor(name){
    this.name = name;
  }
  jump(){
    return "Hop HOP";
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

//soal5
class Clock {
  constructor ({ template }){
    var timer;

    function render (){
      var date = new Date ();

      var hours = date.getHours();
      if(hours < 10) hours = '0' + hours;

      var mins = date.getMinutes();
      if(mins < 10) mins = '0' + mins;

      var secs = date.getSeconds();
      if(secs < 10) secs = '0' + secs;
      
      var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)
      console.log(output);
    }
    this.stop = function(){
      clearInterval(timer);
    };
    this.start = function(){
      render();
      timer = setInterval(render, 1000);
    };
  }
}
var clock = new Clock({template: 'h:m:s'});
clock.start();