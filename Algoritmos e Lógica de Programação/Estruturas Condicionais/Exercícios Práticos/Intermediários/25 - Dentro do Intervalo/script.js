// Peça um número e verifique se ele está no intervalo entre 20 e 50 (inclusive).

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Intervalo [20, 50] ---");

const numero = Number(prompt("Digite um número: "));

if (isNaN(numero)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    if (numero >= 20 && numero <= 50) {
        console.log(`O número ${numero} ESTÁ dentro do intervalo de 20 a 50.`);
    } else {
        console.log(`O número ${numero} NÃO ESTÁ dentro do intervalo de 20 a 50.`);
    }
}