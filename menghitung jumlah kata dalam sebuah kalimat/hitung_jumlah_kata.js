// Import readline
const readline = require('readline');

// Membuat interface untuk input dan output dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung jumlah kata
function hitungJumlahKata(kalimat) {
  // Hilangkan spasi diawal dan diakhir, pecah berdasarkan spasi
  const kataArray = kalimat.trim().split(/\s+/);
  
  if (kalimat.trim() === "") {
    return 0;
  }

  return kataArray.length;
}

// Menampilkan prompt ke user
rl.question("Masukkan sebuah kalimat: ", function(kalimat) {
  const jumlah = hitungJumlahKata(kalimat);
  console.log("Jumlah kata dalam kalimat tersebut adalah:", jumlah);
  
  rl.close();
});
