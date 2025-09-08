// Verifique se o último dígito de um número inteiro é 4 ou 7.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Último Dígito ---");

const numero = Number(prompt("Digite um número inteiro: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, digite um número inteiro válido.");
} else {
    const ultimoDigito = Math.abs(numero % 10); // Math.abs lida com números negativos
    
    if (ultimoDigito === 4 || ultimoDigito === 7) {
        console.log(`O número ${numero} TERMINA com 4 ou 7.`);
    } else {
        console.log(`O número ${numero} NÃO termina com 4 ou 7.`);
    }
}