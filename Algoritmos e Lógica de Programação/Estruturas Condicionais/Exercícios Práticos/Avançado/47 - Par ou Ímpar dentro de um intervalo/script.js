// Verifique se um número é par E se está entre 50 e 100.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Paridade e Intervalo ---");

// Pede ao usuário um número e o converte para o tipo Number.
const numero = Number(prompt("Digite um número: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número inteiro, pois o conceito de par/ímpar
// se aplica a inteiros.
if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, digite um número inteiro válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Esta é a condição principal. Usamos o operador 'E' (&&) para garantir que
    // TODAS as três condições a seguir sejam verdadeiras ao mesmo tempo.
    // 1. numero % 2 === 0: O número deve ser par.
    // 2. numero >= 50: O número deve ser maior ou igual a 50.
    // 3. numero <= 100: O número deve ser menor ou igual a 100.
    if (numero % 2 === 0 && numero >= 50 && numero <= 100) {
        // Este bloco só é executado se as três condições forem verdadeiras.
        console.log(`O número ${numero} é par e está no intervalo [50, 100].`);
    } else {
        // Se pelo menos uma das três condições for falsa, este bloco é executado.
        console.log(`O número ${numero} NÃO atende a todos os critérios.`);
    }
}