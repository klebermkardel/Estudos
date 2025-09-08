// Verifique se um CPF tem 11 dígitos e exiba o 10º.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de CPF ---");

const cpf = prompt("Digite os 11 dígitos do seu CPF (somente números): ");

if (cpf.length === 11 && /^\d+$/.test(cpf)) {
    const decimoDigito = cpf[9];
    console.log(`O 10º dígito (primeiro dígito verificador) é: ${decimoDigito}`);
} else {
    console.log("Erro: Por favor, digite um CPF válido com 11 dígitos numéricos.");
}