// Peça um número e verifique se ele é divisível por 5.

const prompt = require('prompt-sync')();

console.log("\n--- Verificador de Divisibilidade por 5 ---");
const numeroDigitado = prompt("Digite um número inteiro: ");
const numero = Number(numeroDigitado);

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, informe um número inteiro válido.");
} else {
    if (numero % 5 === 0) {
        console.log(`O número ${numero} É divisível por 5.`);
    } else {
        console.log(`O número ${numero} NÃO é divisível por 5.`);
    }
}