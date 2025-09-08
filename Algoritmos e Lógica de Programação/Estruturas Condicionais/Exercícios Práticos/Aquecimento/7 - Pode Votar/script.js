// Pode Votar? Peça a idade de uma pessoa e informe se ela já pode votar (16 anos ou mais).

const prompt = require('prompt-sync')();

console.log("");

const NOME = prompt("Informe o seu nome: ");
const IDADE = Number(prompt("Informe sua idade: "));

if(isNaN(IDADE) || !Number.isInteger(IDADE) || IDADE < 0) {
    console.log("Erro: Por favor, informe uma idade válida (número inteiro e positivo).");
} else {
    let statusVoto;

    if (IDADE >= 16 && IDADE < 18) {
        statusVoto = "Opcional";
    } else if (IDADE >= 70) {
        statusVoto = "Opcional";
    } else if (IDADE >= 18) {
        statusVoto = "Obrigatório";
    } else {
        statusVoto = "Não permitido";
    }

    console.log(`\nOlá, ${NOME}!`);
    console.log(`Sua idade: ${IDADE}`);
    console.log(`Situação de voto: ${statusVoto}`);
}