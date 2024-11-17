/* Escreva um programa que leia a posição x e y de dois pontos no plano cartesiano, e calcule a distância entre ambos. */

const read = require('readline-sync');

// Solicita ao usuário as coordenadas do primeiro ponto
const x1 = parseFloat(read.question("Digite a coordenada x do primeiro ponto: "));
const y1 = parseFloat(read.question("Digite a coordenada y do primeiro ponto: "));

// Solicita ao usuário as coordenadas do segundo ponto
const x2 = parseFloat(read.question("Digite a coordenada x do segundo ponto: "));
const y2 = parseFloat(read.question("Digite a coordenada y do segundo ponto: "));

// Calcula a diferença entre as coordenadas x e y
const diffX = x2 - x1;
const diffY = y2 - y1;

// Calcula a distância entre os pontos usando a fórmula da distância Euclidiana
const distancia = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

console.log(`A distância entre os pontos é de: ${distancia}`);