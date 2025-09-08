// Caixa Eletrônico - Verifique se um valor de saque é múltiplo de 10.

const prompt = require('prompt-sync')();

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

console.log("\n--- Verificador de Saque (Múltiplos de 10) ---");

const valorDoSaque = Number(prompt("Digite o valor do saque: R$ "));


if (isNaN(valorDoSaque) || !Number.isInteger(valorDoSaque) || valorDoSaque <= 0) {
    console.log("Erro: Por favor, digite um valor inteiro e positivo.");
} else {
    if (valorDoSaque % 10 === 0) {
        console.log(`Saque de ${formatadorMoeda.format(valorDoSaque)} autorizado. Aguarde a contagem das notas`);
    } else {
        console.log(`Saque de ${formatadorMoeda.format(valorDoSaque)} negado. O valor deve ser múltiplo de R$ 10,00.`);
    }
}