// Caixa Eletrônico - Verifique se um valor de saque é múltiplo de 10.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Cria um formatador de moeda para o Real (BRL).
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibe um título para o programa.
console.log("\n--- Verificador de Saque (Múltiplos de 10) ---");

// --- ENTRADA E TRATAMENTO DE DADOS ---
// 1. Pede ao usuário o valor do saque como um texto.
const valorDigitado = prompt("Digite o valor do saque: R$ ");

// 2. ADIÇÃO: Limpamos a string para aceitar formatos como "1.000,00".
//    Primeiro removemos os pontos, depois trocamos a vírgula por ponto.
const valorLimpo = valorDigitado.replace(/\./g, "").replace(',', '.');

// 3. Convertemos a string já limpa para o tipo Number.
const valorDoSaque = Number(valorLimpo);


// --- BLOCO DE VALIDAÇÃO ---
// Esta condição garante que o valor seja um número inteiro, positivo e válido para saque.
if (isNaN(valorDoSaque) || !Number.isInteger(valorDoSaque) || valorDoSaque <= 0) {
    // A validação !Number.isInteger() é importante aqui. Se o usuário digitar "50,50",
    // o valor se tornará 50.5, e esta checagem corretamente o identificará como
    // um valor inválido para saque (não inteiro).
    console.log("Erro: Por favor, digite um valor inteiro e positivo.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Verificamos se o valor do saque é um múltiplo de 10.
    // O operador módulo (%) retorna o resto da divisão. Se o resto for 0, é múltiplo.
    if (valorDoSaque % 10 === 0) {
        // Se a condição for verdadeira, o saque é permitido.
        console.log(`Saque de ${formatadorMoeda.format(valorDoSaque)} autorizado. Aguarde a contagem das notas.`);
    } else {
        // Se a condição for falsa, o saque é negado.
        console.log(`Saque de ${formatadorMoeda.format(valorDoSaque)} negado. O valor deve ser múltiplo de R$ 10,00.`);
    }
}