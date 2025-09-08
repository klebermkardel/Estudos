// Peça um número de 3 dígitos e verifique se é um palíndromo (ex: 121).

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Palíndromo (3 dígitos) ---");

const numero = Number(prompt("Digite um número de 3 dígitos: "));

if (isNaN(numero) || !Number.isInteger(numero) || numero < 100 || numero > 999) {
    console.log("Erro: Por favor, digite um número inteiro de 3 dígitos.");
} else {
    const textoNumero = String(numero); // Converte para "121"
    
    // Compara o primeiro caractere (índice 0) com o último (índice 2)
    if (textoNumero[0] === textoNumero[2]) {
        console.log(`O número ${numero} é um palíndromo.`);
    } else {
        console.log(`O número ${numero} não é um palíndromo.`);
    }
}