/*
Categorias de Idade (Requisitos Completos)
O Problema: Peça a idade de uma pessoa e classifique-a em uma das seguintes categorias: "Criança", "Adolescente", "Adulto" ou "Idoso".
*/

// Importa a biblioteca 'prompt-sync' para permitir a entrada de dados do usuário.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Categorias de Idade --- ");

// Pede ao usuário que informe a idade e a converte para o tipo Number.
const idade = Number(prompt("Informe a sua idade: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a idade seja um número inteiro e não negativo.
// A condição || (OU) exibe um erro se a idade for:
// 1. NaN (Não é um número) OU
// 2. Não for um número inteiro OU
// 3. For um número negativo.
if (isNaN(idade) || !Number.isInteger(idade) || idade < 0) {
    console.log("Erro: Por favor, informe apenas números inteiros e positivos.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar a classificação.
    // Usar uma variável e um único bloco de 'console.log' no final é uma boa prática.
    let classificacao;

    // Esta cadeia 'if...else if...else' é muito eficiente. Ela verifica as faixas em ordem.
    
    // 1ª Verificação: Se a idade é menor ou igual a 12, classifica como "Criança" e para a verificação.
    if (idade <= 12) {
        classificacao = "Criança";
    } 
    // 2ª Verificação: Este bloco só é executado se a condição anterior (idade <= 12) for FALSA.
    // Portanto, já sabemos que a idade é >= 13. Só precisamos checar o limite superior da faixa.
    else if (idade <= 17) {
        classificacao = "Adolescente";
    } 
    // 3ª Verificação: Se chegou aqui, já sabemos que a idade é > 17 (ou seja, >= 18).
    // Só precisamos checar o limite superior da faixa de adulto.
    else if (idade <= 59) {
        classificacao = "Adulto";
    } 
    // 4ª Verificação: Se nenhuma das condições anteriores foi verdadeira,
    // a idade só pode ser 60 ou mais. O 'else' final captura esta última categoria.
    else {
        classificacao = "Idoso";
    }

    // --- SAÍDA FINAL ---
    // Exibe a idade e a classificação que foi determinada na lógica acima.
    console.log(`\nSua idade: ${idade} anos`);
    console.log(`Classificação: ${classificacao}`);
}