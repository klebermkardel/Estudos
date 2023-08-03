// Exercícios de Fundamentos

/* Exercício 3: Manipulação de Strings

Dado uma string "JavaScript é incrivel", escreva um código que conte quantos caracteres tem e quantas palavras existem na frase

*/

const frase = "JavaScript é incrível";

// Contar número de caracteres
const numCaracteres = frase.length;

// Contar o número de palavras
const numPalavras = frase.split(" ").length;

console.log("Número de caracteres:", numCaracteres);
console.log("Número de palavras:", numPalavras);