// Positivo, Negativo ou Zero: Peça um número e verifique se ele é positivo, negativo ou zero.

// Importa a biblioteca 'prompt-sync' para a entrada de dados do usuário.
const prompt = require('prompt-sync')();

// Pede ao usuário para informar um número. A entrada é convertida para o tipo Number.
// O texto do prompt já indica a necessidade de um número inteiro.
const numero = Number(prompt("Informe um número inteiro: "));

// Imprime uma linha em branco para melhor formatação da saída.
console.log("");

// --- BLOCO DE VALIDAÇÃO ---
// Verificamos se a entrada é um número inteiro válido.
// 1. isNaN(numero): Garante que a entrada não é um texto (ex: "olá").
// 2. !Number.isInteger(numero): Garante que a entrada não é um número decimal (ex: 5.5).
if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Por favor, informe um número inteiro válido!");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // A cadeia 'if...else if...else' é perfeita para classificar o número.
    
    // 1ª Verificação: É positivo?
    if (numero > 0) {
        console.log(`O número ${numero} é positivo`);
    } 
    // 2ª Verificação: Se não é positivo, é zero?
    // Usamos 'else if' porque este bloco só será executado se o número não for > 0.
    else if (numero === 0) {
        console.log(`O número é zero!`);
    } 
    // 3ª Verificação: Se não é positivo e nem zero, qual a única opção restante?
    // O 'else' final captura todos os casos que falharam nas verificações anteriores.
    else {
        console.log(`O número ${numero} é negativo!`);
    }
}