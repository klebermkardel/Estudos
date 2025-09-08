// Pode Dirigir? Peça a idade de uma pessoa e informe se ela já pode tirar a carteira de motorista (18 anos ou mais).

const prompt = require('prompt-sync')();

console.log("");

const NOME = prompt("Informe o seu nome: ");
const IDADE = Number(prompt("Informe a sua idade: "));

if(isNaN(IDADE) || !Number.isInteger(IDADE) || IDADE <= 0) {
    console.log("Erro: Por favor, informe um número válido (positivo e inteiro).");
} else {
    const podeDirigir = (IDADE >= 18) ? "Sim" : "Não";

    console.log(`\nOlá, ${NOME}!`);
    console.log(`Sua idade: ${IDADE}`);
    console.log(`Pode dirigir: ${podeDirigir}`);
} 
