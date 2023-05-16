// math.random -> retorna valores aleatórios
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Retorno esperado: 0, 1, 2
console.log(getRandomInt(3))

//Retorno esperado: 0
console.log(getRandomInt(1))

//Retorno esperado: qualquer número entre 0 e <1
console.log(Math.random())

console.log("--------------------------------")

// Obtendo um número aleatório entre dois valores
// Este exemplo retorna um número aleatório entre os valores especificados. O valor retornado não é menor que (e pode ser igual a) min e é menor que (e não igual a) max.

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
console.log(getRandomArbitrary(1, 5))

//Obtendo um número inteiro aleatório entre dois valores
// Este exemplo retorna um inteiro aleatório entre os valores especificados. O valor não é menor que min (ou o próximo inteiro maior que minse minnão for um inteiro) e é menor que (mas não igual a) max.

function getRandomIntExclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // O valor máximo é excluído e o valor mínimo é incluído
  }

console.log(getRandomIntExclusive(1, 5))

// Obtendo um número inteiro aleatório entre dois valores, inclusive
// Enquanto a getRandomInt()função acima é inclusiva no mínimo, é exclusiva no máximo. E se você precisar que os resultados sejam inclusivos no mínimo e no máximo? A getRandomIntInclusive()função abaixo faz isso.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // O valor máximo é incluído e o valor mínimo também
  }

console.log(getRandomIntInclusive(1,5))