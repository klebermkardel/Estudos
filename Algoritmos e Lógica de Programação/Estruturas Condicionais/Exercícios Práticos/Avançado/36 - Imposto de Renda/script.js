// Calcule o imposto a ser pago com base em faixas salariais.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Cria um formatador de moeda para o Real (BRL).
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// Exibe um título para o programa.
console.log("\n--- Calculadora de Imposto de Renda (Simplificada) ---");

// --- ENTRADA E TRATAMENTO DE DADOS ---
// Pede ao usuário o salário bruto.
const salarioDigitado = prompt("Digite o seu salário bruto: ");
// Limpa a entrada do usuário para aceitar formatos como "2.500,50" e a converte para Number.
const salario = Number(salarioDigitado.replace(/\./g, "").replace(',', '.'));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o salário seja um número válido e não negativo.
if (isNaN(salario) || salario < 0) {
    console.log("Erro: Por favor, digite um valor de salário válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---

    // Declara as variáveis que serão definidas pela estrutura condicional.
    let aliquota;
    let parcelaDeduzir;

    // A cadeia 'if...else if...else' determina a alíquota e a dedução corretas
    // para a faixa salarial correspondente.
    if (salario <= 2259.20) {
        aliquota = 0;
        parcelaDeduzir = 0;
    } else if (salario <= 2826.65) {
        aliquota = 0.075; // 7.5%
        parcelaDeduzir = 169.44;
    } else if (salario <= 3751.05) {
        aliquota = 0.15; // 15%
        parcelaDeduzir = 381.44;
    } else if (salario <= 4664.68) {
        aliquota = 0.225; // 22.5%
        parcelaDeduzir = 662.77;
    } else { // Para salários acima de R$ 4664.68
        aliquota = 0.275; // 27.5%
        parcelaDeduzir = 896.00;
    }

    // --- CÁLCULOS FINAIS ---
    // Calcula o valor do imposto sem a dedução.
    const impostoBruto = salario * aliquota;
    // Subtrai a parcela a deduzir para encontrar o valor real do imposto.
    const impostoDevido = impostoBruto - parcelaDeduzir;

    // Garante que o imposto a pagar não seja um valor negativo, o que pode acontecer
    // nas faixas mais baixas. Math.max(0, valor) retorna o maior valor entre 0 e 'valor'.
    const impostoFinal = Math.max(0, impostoDevido);

    // --- SAÍDA FINAL ---
    // Exibe um resumo completo e formatado para o usuário.
    console.log(`\nSalário Bruto:           ${formatadorMoeda.format(salario)}`);
    console.log(`Alíquota Efetiva:        ${(aliquota * 100).toFixed(1)}%`);
    console.log(`Imposto de Renda a Pagar: ${formatadorMoeda.format(impostoFinal)}`);
}