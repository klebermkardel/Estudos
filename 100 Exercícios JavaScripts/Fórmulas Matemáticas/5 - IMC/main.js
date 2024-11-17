/* Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula IMC = peso / altura² */

const read = require("readline-sync");

const peso = Number(read.question("Digite o seu peso (Kg): ").replace(",","."));
const altura = Number(read.question("Digite a sua altura (m): ").replace(",","."));

const imc = peso / altura**2;

console.log(`O seu IMC é de : ${imc.toFixed(2)}`);