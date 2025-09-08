// IMC (Índice de Massa Corporal): Peça o peso (kg) e a altura (m) de uma pessoa. Calcule o IMC (peso/altura2) e classifique: Abaixo de 18.5 (Abaixo do peso), 18.5-24.9 (Peso normal), 25-29.9 (Sobrepeso), 30 ou mais (Obesidade).

const prompt = require('prompt-sync')();

console.log("\n--- Calculadora de IMC ---\n");

const peso = Number(prompt("Informe o seu peso (Ex: 75.5): "));
const altura = Number(prompt("Informe a sua altura (Ex: 1.75): "));

if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Erro: Por favor, informe valores numéricos e positivos para o peso e a altura: ");
} else {
    const imc = peso / (altura ** 2);

    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}