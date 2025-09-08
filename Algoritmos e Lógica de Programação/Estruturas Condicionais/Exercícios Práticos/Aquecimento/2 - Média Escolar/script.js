// Crie um programa que receba a nota de um aluno e exiba "Aprovado" se a nota for maior ou igual a 7, "Recuperação" se for maior ou igual a 5 e menor que 7, e "Reprovado" se for menor que 5.

const prompt = require('prompt-sync')();

const nota = parseFloat(prompt("Informe a nota do aluno: "));

console.log("");

if(isNaN(nota)) {
    console.log("Erro: Por favor, digite um número válido.")
} else {
    if(nota >= 7) {
        console.log("Aprovado!");
    } else if(nota >= 5) {
        console.log("Recuperação.");
    } else {
        console.log("Reprovado.");
    }
}