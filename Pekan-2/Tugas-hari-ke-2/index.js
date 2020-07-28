// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sin

function recursiveRead(waktu, index){
    readBooks(waktu, books[index], function (sisaWaktu){
        console.log(sisaWaktu)
        if (sisaWaktu >= 0){
            if(index + 1 < books.length){
                recursiveRead(sisaWaktu, index + 1)
                }else {
                    console.log("semua buku selesai dibaca");
                }
        }
    });
}
recursiveRead(10000, 0)