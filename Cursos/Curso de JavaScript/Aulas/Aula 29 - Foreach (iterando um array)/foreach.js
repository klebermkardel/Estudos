// Aula 29 - forEach (Iterando um array)

const numeros = [1, 2, 3, 4, 5]


// Array Original:
console.log('Array Original:')
console.log('[' + numeros + ']')

console.log('--------------------------------')

console.log('Sem forEach:')
for (numero of numeros)
    console.log(numero)

console.log('--------------------------------')

// forEach
console.log('forEach:')
numeros.forEach((numero) => console.log(numero))