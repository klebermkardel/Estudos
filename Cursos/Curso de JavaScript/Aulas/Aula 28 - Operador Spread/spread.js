// Aula 28 - Operador Spread

console.log('Operador Spread')

const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

console.log('Arrays Originais:')

console.log('[' + primeiro + ']')
console.log('[' + segundo + ']')

console.log('--------------------------------')

// Array Combinado:

console.log('Array Combinado:')

//const combinado = primeiro.concat(segundo)
const combinado = [...primeiro,...segundo]

console.log('[' + combinado + ']')

console.log('--------------------------------')



// Array clonado:

console.log('Array Clonado:')

const clonado = [...combinado]
console.log('[' + clonado + ']')



