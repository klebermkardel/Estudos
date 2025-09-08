// Pode Votar? Peça a idade de uma pessoa e informe se ela já pode votar (16 anos ou mais).

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// Imprime uma linha em branco para formatação.
console.log("");

// Pede o nome e a idade do usuário.
const NOME = prompt("Informe o seu nome: ");
const IDADE = Number(prompt("Informe sua idade: "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta é uma validação muito robusta. Usamos o operador 'OU' (||) para checar:
// 1. isNaN(IDADE): Se a entrada não é um número.
// 2. !Number.isInteger(IDADE): Se a entrada é um número decimal.
// 3. IDADE < 0: Se a entrada é um número negativo.
if (isNaN(IDADE) || !Number.isInteger(IDADE) || IDADE < 0) {
    console.log("Erro: Por favor, informe uma idade válida (número inteiro e positivo).");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // A variável 'statusVoto' é declarada com 'let' para que seu valor possa ser
    // definido em cada um dos blocos condicionais.
    let statusVoto;

    // A cadeia 'if...else if...else' é perfeita para as faixas de idade.
    
    // 1ª Verificação: Voto opcional para jovens
    // Checamos se a idade está entre 16 e 18 anos, mas sem incluir o 18.
    if (IDADE >= 16 && IDADE < 18) {
        statusVoto = "Opcional";
    } 
    // 2ª Verificação: Voto opcional para idosos
    else if (IDADE >= 70) {
        statusVoto = "Opcional";
    } 
    // 3ª Verificação: Voto obrigatório para adultos
    else if (IDADE >= 18) {
        statusVoto = "Obrigatório";
    } 
    // 4ª Verificação: Se nenhuma das condições acima for verdadeira,
    // o voto não é permitido (para menores de 16 anos).
    else {
        statusVoto = "Não permitido";
    }

    // --- SAÍDA FINAL ---
    // Imprimimos o resultado final uma única vez, usando a variável 'statusVoto'.
    // Isso mantém o código limpo e organizado (princípio DRY).
    console.log(`\nOlá, ${NOME}!`);
    console.log(`Sua idade: ${IDADE}`);
    console.log(`Situação de voto: ${statusVoto}`);
}