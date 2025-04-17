// Import readline
const readline = require("readline");

// Buat interface untuk input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk mencari huruf yang paling sering muncul
function hurufTerbanyak(kata) {
  const frekuensi = {};

  // Hitung frekuensi tiap huruf
  for (const huruf of kata.toLowerCase()) {
    if (huruf !== " ") {
      frekuensi[huruf] = (frekuensi[huruf] || 0) + 1;
    }
  }

  // Cari huruf dengan frekuensi terbanyak
  let maxHuruf = "";
  let maxJumlah = 0;

  for (const huruf in frekuensi) {
    if (frekuensi[huruf] > maxJumlah) {
      maxJumlah = frekuensi[huruf];
      maxHuruf = huruf;
    }
  }

  return maxHuruf;
}

// Ambil input dari user
rl.question("Masukkan sebuah kata: ", function (input) {
  const hasil = hurufTerbanyak(input);
  console.log(`Huruf yang paling sering muncul adalah: '${hasil}'`);
  rl.close();
});
