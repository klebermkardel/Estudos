// Avançando em JavaScript

// Manipulação de Arrays

const frutas = [" Maçã", " Laranja"];
console.log(`Array inicial: ${frutas}`);

console.log("--------------------------------");

frutas.unshift("Acerola");

console.log(`Array com item adicionado no começo: ${frutas}`);

console.log("--------------------------------");

frutas.shift();

console.log(`Array com item removido do começo: ${frutas}`);

console.log("--------------------------------");

// map, filter, reduce -> arrow functions

// Array Original:
const numeros = [1, 2, 3, 4, 5, 6]

// Método find: retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(`Método Find: ${numeroPar}`); // Retorna 2

// Método filter: retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(`Método filter: ${numerosPares}`); // Retorna 2, 4, 6