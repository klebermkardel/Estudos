// Calcule um reajuste salarial com faixas de aumento diferentes.

const prompt = require('prompt-sync')();
const formatadorMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
console.log("\n--- Calculadora de Reajuste Salarial ---");

const salarioDigitado = prompt("Digite o seu salário bruto: ");
const salarioAtual = Number(salarioDigitado.replace(/\./g, "").replace(',', '.'));

if (isNaN(salarioAtual) || salarioAtual <= 0) {
    console.log("Erro: Por favor, digite um valor de salário válido.");
} else {
    let percentualAumento;
    
    if (salarioAtual <= 1500) {
        percentualAumento = 0.20; // 20%
    } else {
        percentualAumento = 0.10; // 10%
    }
    
    const valorAumento = salarioAtual * percentualAumento;
    const novoSalario = salarioAtual + valorAumento;

    console.log(`\nSalário Original: ${formatadorMoeda.format(salarioAtual)}`);
    console.log(`Percentual de Aumento: ${percentualAumento * 100}%`);
    console.log(`Valor do Aumento: ${formatadorMoeda.format(valorAumento)}`);
    console.log(`Novo Salário: ${formatadorMoeda.format(novoSalario)}`);
}