/* Peça uma palavra ao usuário e exiba quantas vogais ela possui.

Exemplo de entrada: "programação"
Saída esperada: A palavra possui 5 vogais.

*/

let palavra = prompt("Digite uma palavra:").toLowerCase();

// Expressão regular que encontra todas as vogais
let vogais = palavra.match(/[aeiouáéíóúâêôãõàäëïöü]/g);

let quantidade = vogais ? vogais.length : 0;

alert(`A palavra "${palavra}" possui ${quantidade} vogal(is).`);



