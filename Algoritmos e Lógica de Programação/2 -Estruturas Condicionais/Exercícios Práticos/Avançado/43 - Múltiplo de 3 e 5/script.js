// Verifique se um número é divisível por 3 e 5 ao mesmo tempo.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Múltiplos ---");

// Pede ao usuário um número e o converte para o tipo Number.
const numero = Number(prompt("Digite um número inteiro: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro válido.
// 1. isNaN(numero): Verifica se a entrada não é um número.
// 2. !Number.isInteger(numero): Verifica se o número tem casas decimais.
if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, digite um número inteiro válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // A condição principal usa o operador 'E' (&&).
    // Para ser divisível por 3 E 5, o número precisa satisfazer as duas condições
    // AO MESMO TEMPO.
    // 1. numero % 3 === 0: O resto da divisão por 3 é zero.
    // 2. numero % 5 === 0: O resto da divisão por 5 é zero.
    if (numero % 3 === 0 && numero % 5 === 0) {
        // Se ambas as condições forem verdadeiras.
        console.log(`O número ${numero} é divisível por 3 e 5.`);
    } else {
        // Se pelo menos uma das condições for falsa.
        console.log(`O número ${numero} NÃO é divisível por 3 e 5.`);
    }
}