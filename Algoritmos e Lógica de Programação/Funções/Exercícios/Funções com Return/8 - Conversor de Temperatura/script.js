// Conversor de Temperatura: Crie uma função chamada converterCelsiusParaFahrenheit que receba uma temperatura em Celsius e retorne o valor em Fahrenheit. (Fórmula: C * 1.8 + 32).

const prompt = require('prompt-sync')();

const converterCelsiusParaFahrenheit = (celsius) => celsius * 1.8 + 32;

const temperaturaDigitada = Number(prompt("Quantos graus Celsius você deseja converter? "));

if(isNaN(temperaturaDigitada)) {
    console.log("Erro: Por favor, informe um número válido.");
} else {
    console.log(`${temperaturaDigitada}ºC = ${converterCelsiusParaFahrenheit(temperaturaDigitada)}ºF`);
}