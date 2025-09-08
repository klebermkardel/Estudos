// Verifique se um caractere é número, letra maiúscula, minúscula ou símbolo.

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Tipo de Caractere ---");

const char = prompt("Digite um único caractere: ");

if (!char || char.length !== 1) {
    console.log("Erro: Por favor, digite apenas um caractere.");
} else {
    let tipo;

    if (/[0-9]/.test(char)) {
        tipo = "Número";
    } else if (/[a-z]/.test(char)) {
        tipo = "Letra Minúscula";
    } else if (/[A-Z]/.test(char)) {
        tipo = "Letra Maiúscula";
    } else {
        tipo = "Símbolo";
    }

    console.log(`O caractere "${char}" é um: ${tipo}.`);
}