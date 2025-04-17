// Import readline module
const readline = require('readline');

// Buat interface input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk mengurutkan dari kecil ke besar
function ascending(arr) {
  return [...arr].sort((a, b) => a - b);
}

// Fungsi untuk mengurutkan dari besar ke kecil
function descending(arr) {
  return [...arr].sort((a, b) => b - a);
}

// Input dari user
rl.question("Masukkan array angka (pisahkan dengan koma, contoh: 3,1,5,2,4): ", function(input) {
  const angkaArray = input.split(',').map(item => parseFloat(item.trim()));

  const asc = ascending(angkaArray);
  const desc = descending(angkaArray);

  console.log("Urutan dari kecil ke besar (ASC):", asc);
  console.log("Urutan dari besar ke kecil (DESC):", desc);

  rl.close();
});
