//Soal 1 While looping

var angka = 2;
console.log("SOAL NOMOR 1")
console.log("LOOPING"+ " " + "PERTAMA")
while(angka < 22) { 
  console.log(angka + " " +"-" + " " + "I love coding")
  angka+=2
}

var angka = 20;
console.log("LOOPING"+ " " + "KEDUA")
while(angka >=2) {
  console.log(angka + " " +"-" + " " + "I will become a frontend developer")
  angka-=2;
}


//soal no 2
var p = 20;
var y;
console.log("SOAL NOMOR 2")

for (y=1; y<=p; y++){
  if (y%3 ===  0 && y%2 ===1){
    console.log(y+ ' - I Love Coding');
  }
  else if (y%2 === 1){
    console.log(y+ ' - Santai');
  }
  else if (y%2 === 0){
    console.log(y+ ' - Berkualitas');
  }
 }


 //soal 3
 var a = '';
 console.log("SOAL NOMOR 3")
    for (var i = 1; i<= 7; i++){
    for(var j = 1; j<=i; j++){
     a +='#';
   }
   a +='\n';
 }
        console.log(a);

 //soal4
    var kalimatSaya = "saya,sangat,senang,belajar,javascript"
    var ituAku = kalimatSaya.split(",")
    console.log("SOAL NOMOR 4")
        console.log(ituAku)


//soal5
    var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"]
        console.log("SOAL NOMOR 5")
    for (var i=0; i<=4; i++){
        console.log(daftarBuah.sort()[i])
    }

    