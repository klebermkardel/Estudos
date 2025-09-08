// Pode Dirigir? Peça a idade de uma pessoa e informe se ela já pode tirar a carteira de motorista (18 anos ou mais).

// Importa a biblioteca para entrada de dados do usuário.
const prompt = require('prompt-sync')();

// Imprime uma linha em branco para formatação.
console.log("");

// Pede o nome e a idade do usuário.
const NOME = prompt("Informe o seu nome: ");
// Converte a idade digitada (que é um texto) para o tipo Number.
const IDADE = Number(prompt("Informe a sua idade: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a idade seja um número inteiro, positivo e válido.
// A condição verifica se a idade é:
// 1. NaN (Não é um Número) OU
// 2. Não é um Inteiro OU
// 3. Menor ou igual a zero.
if (isNaN(IDADE) || !Number.isInteger(IDADE) || IDADE <= 0) {
    console.log("Erro: Por favor, informe uma idade válida (número inteiro e positivo).");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL (usando Operador Ternário) ---
    // Esta é uma forma concisa de escrever um if/else simples. A lógica é:
    // (condição) ? valor_se_verdadeiro : valor_se_falso;
    // Se IDADE >= 18 for verdadeiro, 'podeDirigir' recebe "Sim".
    // Senão, 'podeDirigir' recebe "Não".
    const podeDirigir = (IDADE >= 18) ? "Sim" : "Não";

    // --- SAÍDA FINAL ---
    // Exibe o resultado de forma organizada para o usuário.
    console.log(`\nOlá, ${NOME}!`);
    console.log(`Sua idade: ${IDADE}`);
    console.log(`Pode tirar a CNH: ${podeDirigir}`);
}