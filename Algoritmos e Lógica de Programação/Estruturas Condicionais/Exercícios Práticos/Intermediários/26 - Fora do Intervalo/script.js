// Peça um número e verifique se ele está fora do intervalo de 10 a 20 (exclusive).

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Fora do Intervalo (10, 20) ---");

const numero = Number(prompt("Digite um número: "));

if (isNaN(numero)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    if (numero <= 10 || numero >= 20) {
        console.log(`O número ${numero} ESTÁ fora do intervalo de 10 a 20.`);
    } else {
        console.log(`O número ${numero} NÃO ESTÁ fora do intervalo de 10 a 20.`);
    }
}