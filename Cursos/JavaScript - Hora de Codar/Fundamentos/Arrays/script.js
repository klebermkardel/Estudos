// Fundamentos - Arrays

// Array (Lista)
const numeros = [1, 2, 3, 4, 5];

// Exibe array completo no console

console.log("Array Inicial:");
console.log(numeros); // retorna [1, 2, 3, 4, 5]

console.log("----------------");

// Acessando items do array individualmente por meio do índice

console.log("Acessa indice 0 do array: " + numeros[0]); // retorna 1
console.log("Acessa indice 2 do array: " + numeros[2]); // retorna 3

console.log("----------------");

// Adicionando itens no final do array
console.log("Array com item adicionado ao fim:")
numeros.push(6); // adiciona número 6 ao final do array
console.log(numeros); // retorna [1, 2, 3, 4, 5, 6]

console.log("----------------");


// Removendo últmo item do array
console.log("Array com item removido do final:")
numeros.pop();
console.log(numeros);

console.log("----------------");

