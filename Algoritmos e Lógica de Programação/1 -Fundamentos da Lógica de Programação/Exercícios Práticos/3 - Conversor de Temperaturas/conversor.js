// Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula é: F = C × 1.8 + 32.

const prompt = require('prompt-sync')();

const temperaturaCelsius = parseFloat(prompt("Informe a temperatura em Graus Celsius: "));

const temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;

console.log("");

console.log(`${temperaturaCelsius}ºC = ${temperaturaFahrenheit}°F`);