// Fundamentos - Concatenação

// Strings

const minhaString = "Olá, mundo!";

// Concatenação => (sinal de +)
const novaString = minhaString + " Como você está?";

console.log("Concatenação:")
console.log(novaString);

console.log("-----------------");

// Interpolação
const newString = `${minhaString} Como você está?`;

console.log("Interpolação:");
console.log(newString);

console.log("-----------------");



// Métodos para strings
console.log("Métodos para strings:")

console.log(`Número de caracteres: ${newString.length}`) // retorna 27 (nessa string)
console.log(`Caracter específico através do indice do array: ${newString[5]} (5º caracter)`); // retorna o 5 caracter "m" (nessa string)
console.log(`Retorna string em caixa alta: ${newString.toLocaleUpperCase()}`) // retorna "OLÁ, MUNDO! COMO VOCÊ ESTÁ?"