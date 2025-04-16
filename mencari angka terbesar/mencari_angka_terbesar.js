// Import readline
const readline = require('readline');

// Buat interface untuk input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk mencari angka terbesar
function cariAngkaTerbesar(array) {
  if (array.length === 0) return null;
  return Math.max(...array);
}

// Minta input dari user
rl.question("Masukkan array angka (pisahkan dengan koma, contoh: 1,5,3,7,2): ", function(input) {
  // Ubah input string menjadi array angka
  const angkaArray = input.split(',').map(item => parseFloat(item.trim()));

  // Cari angka terbesar
  const terbesar = cariAngkaTerbesar(angkaArray);

  console.log("Angka terbesar dalam array adalah:", terbesar);
  rl.close();
});
