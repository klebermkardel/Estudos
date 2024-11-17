/* Escreva um programa que calcule o trabalho realizado por uma força que atua sobre um objeto, utilizando a fórmula T = F * d, onde T é o trabalho, F é a força aplicada e d é a distância percorrida pelo objeto. */

const read = require('readline-sync');

const forcaAplicada = parseFloat(read.question("Digite a força aplicada: "));
const distanciaPercorrida = parseFloat(read.question("Digite a distância percorrida pelo objeto: "));

const trabalhoRealizado = forcaAplicada * distanciaPercorrida;

console.log(`O trabalho realizado pela força aplicada neste objeto foi de: ${trabalhoRealizado}`);

