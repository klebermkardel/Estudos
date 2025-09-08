// Verifique se um número é divisível por 3 e 5 ao mesmo tempo.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Múltiplos ---");

const numero = Number(prompt("Digite um número inteiro: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, digite um número inteiro válido.");
} else {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(`O número ${numero} é divisível por 3 e 5.`);
    } else {
        console.log(`O número ${numero} NÃO é divisível por 3 e 5.`);
    }
}