// Crie um programa que armazene seu nome e sua idade em variáveis e, em seguida, exiba a seguinte frase no console: "Olá, [Seu Nome]! Você tem [Sua Idade] anos.

const prompt = require('prompt-sync')();

const nome = prompt("Informe o seu nome: ");
const idade = parseInt(prompt("Informe a sua idade: "));

console.log("");

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);