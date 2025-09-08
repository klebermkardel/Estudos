// Calcule o imposto a ser pago com base em faixas salariais.

const prompt = require('prompt-sync')();

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

console.log("\n--- Calculadora de Imposto de Renda (Simplificada) ---");

const salarioDigitado = prompt("Digite o seu salário bruto: ");
const salario = Number(salarioDigitado.replace(/\./g, "").replace(',', '.'));

if(isNaN(salario) || salario < 0) {
    console.log("Erro: Por favor, digite um valor de salário válido.");
} else {
    let aliquota;
    let parcelaDeduzir;

    if (salario <= 2259.20) {
        aliquota = 0;
        parcelaDeduzir = 0;
    } else if (salario <= 2826.65) {
        aliquota = 0.075;
        parcelaDeduzir = 169.44;
    } else if (salario <= 3751.05) {
        aliquota = 0.15;
        parcelaDeduzir = 381.44;
    } else if (salario <= 4664.68) {
        aliquota = 0.225;
        parcelaDeduzir = 662.77;
    } else {
        aliquota = 0.275;
        parcelaDeduzir = 896.00;
    }

    const impostoBruto = salario * aliquota;
    const impostoDevido = impostoBruto- parcelaDeduzir;

    const impostoFinal = Math.max(0, impostoDevido);

    console.log(`Salário Bruto: ${formatadorMoeda.format(salario)}`);
    console.log(`Alíquota: ${(aliquota * 100).toFixed(1)}%`);
    console.log(`Imposto de Renda a Pagar: ${formatadorMoeda.format(impostoFinal)}`);
}