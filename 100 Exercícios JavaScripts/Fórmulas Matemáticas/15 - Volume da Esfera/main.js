/* Crie um programa que solicite ao usuário o valor do raio de uma esfera e calcule e exiba o seu volume */

const read = require('readline-sync');

// Solicita ao usuário o valor do raio da esfera
const raio = parseFloat(read.question("Digite o valor do raio da esfera: "))

// Calcula o volume da esfera
const volume = (4/3) * Math.PI * Math.pow(raio, 3);

console.log(`O volume da esfera é: ${volume.toFixed(2)}`);