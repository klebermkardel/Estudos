// Classificar IMC: Crie uma função chamada classificarIMC que receba um valor de imc como parâmetro. A função deve retornar a string correspondente à classificação (ex: "Abaixo do peso", "Peso normal", etc.), usando a mesma lógica do exercício de IMC que já fizemos.

// Exercício 11: Classificar IMC

const prompt = require('prompt-sync')();

const classificarIMC = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
};

console.log("\n--- Calculadora e Classificador de IMC ---");
const peso = Number(prompt("Digite seu peso em kg: "));
const altura = Number(prompt("Digite sua altura em metros (ex: 1.75): "));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Erro: Por favor, informe valores numéricos e positivos.");
} else {
    const imcCalculado = peso / (altura ** 2);
    
    const classificacao = classificarIMC(imcCalculado);

    console.log(`\nSeu IMC é: ${imcCalculado.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}