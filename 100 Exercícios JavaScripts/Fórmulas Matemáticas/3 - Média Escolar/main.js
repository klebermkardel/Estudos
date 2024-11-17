// Escreva um programa que calcule a média aritmética de dois números.

const read = require("readline-sync");

const nota1 = Number(read.question("Digite a 1ª nota: "));
const nota2 = Number(read.question("Digite a 2ª nota: "));
const nota3 = Number(read.question("Digite a 3ª nota: "));
const nota4 = Number(read.question("Digite a 4ª nota: "));

const mediaEscolar = (nota1+nota2+nota3+nota4) / 4;

console.log(`A média escolar deste aluno foi de ${mediaEscolar}`);