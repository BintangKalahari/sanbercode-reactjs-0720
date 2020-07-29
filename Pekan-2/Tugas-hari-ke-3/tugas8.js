//soal1
const phi = 3.14;
let luas;
let keliling;
let r;
let d;
const hitung = () => {
	r = parseFloat(document.getElementById("ipt_r").value);
	luas = phi * Math.pow(r,2);
	d = 2 * r;
	keliling = phi * d;
	document.getElementById('opt_luas').value = luas;
	document.getElementById('opt_keliling').value = keliling;
}





//soal2
let kalimat1 = 'saya'
let kalimat2 = 'adalah'
let kalimat3 = 'seorang'
let kalimat4 = 'frontend'
let kalimat5 = 'developer'
var  gabung = ()  => {
let kalimatUtama = `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`
return kalimatUtama 
}
console.log("NOMOR 2")
console.log(gabung())


//soal3
class Book {
    constructor(name){
    this.name = "Termodinamika";
    this.totalPage = 300;
    this.price = 100000
    }
  }
  
  const buku = new Book ("Termodinamika");
  console.log(buku.name) 
  console.log(buku.totalPage) 
  console.log(buku.price) 


  class Book {
    constructor(name,totalPage,price){
      this.name = name;
      this.totalPage = totalPage;
      this.price = price;
    }
  
  }
  class Komik extends Book{
    constructor(name,totalPage,price){
      super(name)
    
      this.totalPage =  totalPage
      this.price = price
      this.isColorful = true
    }
    show(){
      return this.name+ " " + this.totalPage + " " + this.price
    
      
      //const theString = `${name} ${totalPage}, ${price}  ${isColorful}`
    }
  }
  buku = new Komik ("Komik", 300, 100000)
  console.log(buku.show())