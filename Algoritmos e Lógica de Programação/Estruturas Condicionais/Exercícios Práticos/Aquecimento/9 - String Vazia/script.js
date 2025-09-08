// Verifique se uma string fornecida pelo usuário está vazia ou não.

const prompt = require('prompt-sync')();

console.log();

const textoDigitado = prompt("Digite algo: ");

if(!textoDigitado.trim()) {
    console.log("Essa é uma string vazia");
} else {
    console.log(textoDigitado);
}

