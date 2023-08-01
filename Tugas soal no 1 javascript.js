const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function akarPangkatDua(x) {
    if (x < 0) {
      throw new Error("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
      throw new Error("Tidak bisa input bilangan ganjil");
    } else if (x % 2 === 0) {
      throw new Error("Tidak bisa input bilangan genap");
    } else {
      return Math.sqrt(x);
    }
  }
  
  rl.question("Masukkan angka: ", function(input) {
    try {
      const x = parseInt(input);
      const result = akarPangkatDua(x);
      console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
    } catch (error) {
      console.log(error.message);
    }
    rl.close();
  });