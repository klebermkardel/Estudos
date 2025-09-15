// Calcule um reajuste salarial com faixas de aumento diferentes.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Cria um formatador de moeda para o Real (BRL).
const formatadorMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

// Exibe um título para o programa.
console.log("\n--- Calculadora de Reajuste Salarial ---");

// --- ENTRADA E TRATAMENTO DE DADOS ---
// Pede ao usuário o salário bruto.
const salarioDigitado = prompt("Digite o seu salário bruto: ");
// Limpa a entrada do usuário para aceitar formatos como "1.500,00".
// 1. Remove os pontos de milhar.
// 2. Troca a vírgula de decimal por um ponto.
const salarioAtual = Number(salarioDigitado.replace(/\./g, "").replace(',', '.'));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o salário seja um número positivo e válido.
if (isNaN(salarioAtual) || salarioAtual <= 0) {
    console.log("Erro: Por favor, digite um valor de salário válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar o percentual de aumento.
    let percentualAumento;
    
    // A estrutura 'if/else' é usada para definir o percentual correto com base na faixa salarial.
    // Se o salário for menor ou igual a 1500...
    if (salarioAtual <= 1500) {
        percentualAumento = 0.20; // ...o aumento é de 20%.
    } 
    // Senão (para qualquer salário maior que 1500)...
    else {
        percentualAumento = 0.10; // ...o aumento é de 10%.
    }
    
    // --- CÁLCULOS FINAIS ---
    // Com o percentual já definido, os cálculos são feitos uma única vez.
    const valorAumento = salarioAtual * percentualAumento;
    const novoSalario = salarioAtual + valorAumento;

    // --- SAÍDA FINAL ---
    // Exibe um resumo completo e formatado para o usuário.
    console.log(`\nSalário Original:      ${formatadorMoeda.format(salarioAtual)}`);
    // Multiplicamos o percentual por 100 para exibi-lo de forma legível (ex: 20%).
    console.log(`Percentual de Aumento: ${percentualAumento * 100}%`);
    console.log(`Valor do Aumento:      ${formatadorMoeda.format(valorAumento)}`);
    console.log(`Novo Salário:          ${formatadorMoeda.format(novoSalario)}`);
}