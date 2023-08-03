// Avançando em JavaScript

// Manipulação de Strings
const frase = " Olá, mundo!  ";
console.log(`String original com espaços no começo e no fim: ${frase}`) // Retorna " Olá, mundo!  "

// Removendo espaços vazios no começo e fim da string
const palavras = frase.trim();
console.log(`String sem espaços no começo e no fim: ${palavras}`) // Retorna "Olá, mundo!"


console.log("---------------------------------");

const frase2 = "JavaScript é incrivel";
console.log(`String: ${frase2}`); 

console.log(`Verifica se texto passado como critério está presente no começo da string: ${frase2.startsWith("Java")}`); // retorna true neste exemplo

console.log(`Verifica se texto passado como critério está presente no fim da string: ${frase2.endsWith("incrivel")}`); // retorna true neste exemplo