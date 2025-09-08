// Verifique se um número é par E se está entre 50 e 100.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Paridade e Intervalo ---");

const numero = Number(prompt("Digite um número: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, digite um número inteiro válido.");
} else {
    if (numero % 2 === 0 && numero >= 50 && numero <= 100) {
        console.log(`O número ${numero} é par e está no intervalo [50, 100].`);
    } else {
        console.log(`O número ${numero} NÃO atende a todos os critérios.`);
    }
}