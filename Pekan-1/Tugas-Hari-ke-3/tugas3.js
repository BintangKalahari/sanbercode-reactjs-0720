//Soal 1
//Menggabungkan Variabel variabel menjadi 1 kalimat
var kataPertama = "saya"
var kataKedua = "senang"
var kataKetiga = "belajar"
var kataKeempat = "JAVASCRIPT"
var kalimat = kataPertama + " "+ kataKedua + " " + kataKetiga + " " + kataKeempat
console.log(kalimat)


//soal 2
//Operasi penjumlahan pada javascript
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var angkabaru = (parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat));
console.log(angkabaru)

//soal 3
//penggunaan sub.string
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//soal4
//pengkondisian if else

var nilai = 95;

  if (nilai >=80 && nilai <=100 ) {
    console.log("Indeks = A");
  }else if (nilai >=70 && nilai <80 ) {
    console.log("Indeks = B");
  }else if (nilai >=60 && nilai <70 ) {
    console.log("Indeks = C");
  } else if (nilai >=50 && nilai <60 ) {
    console.log("Indeks = D");
  }else if (nilai <50 ) {
   console.log("Indeks = E");
  }else {
  console.log("Nilai Tidak memenuhi syarat");
  }

  //soal5
  //switchcase
  //maaf mas saya belum bisa

var tanggal = 28;
var bulan = 4;
var tahun = 2001;
//var string = "tanggal + bulan + tahun;
//console.log("string");
switch(bulan) {
  case 1:   { console.log("Januari"); break; }
  case 2:   { console.log("Februari"); break; }
  case 3:   { console.log("Maret"); break; }
  case 4:   { console.log("April"); break; }
  default:  { console.log ("Bukan Nama Bulan");break; }
   var kalimat = tanggal + bulan + tahun
console.log("kalimat");
    
}


