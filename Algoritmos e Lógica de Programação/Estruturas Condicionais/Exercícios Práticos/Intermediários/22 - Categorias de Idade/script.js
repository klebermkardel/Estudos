/*

Categorias de Idade (Requisitos Completos)
O Problema: Peça a idade de uma pessoa e classifique-a em uma das seguintes categorias: "Criança", "Adolescente", "Adulto" ou "Idoso".

Requisitos (Faixas Etárias):

Criança: Se a idade for de 0 a 12 anos.

Adolescente: Se a idade for de 13 a 17 anos.

Adulto: Se a idade for de 18 a 59 anos.

Idoso: Se a idade for 60 anos ou mais.

*/

const prompt = require('prompt-sync')();

console.log("\n--- Categorias de Idade --- ")

const idade = Number(prompt("Informe a sua idade: "));

if(isNaN(idade) || !Number.isInteger(idade) || idade < 0) {
    console.log("Erro: Por favor, informe apenas números inteiros e positivos.");
} else {
    let classificacao;

    if(idade <= 12) {
        classificacao = "Criança";
    } else if(idade <= 17) {
        classificacao = "Adolescente";
    } else if(idade <= 59) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    console.log(`\nSua idade: ${idade} anos`)
    console.log(`Classificação: ${classificacao}`)
}