// Aprender a usar métodos para manipular arrays como adicionar novos elementos, encontrar elementos, remover elementos, dividir elementos, dividir arrays, combinar arrays, etc...

// Adicionamento elementos a um array

const numeros = [1, 2, 3]
console.log('Array Original: [' + numeros + ']')

console.log('----------------------------------')

// Adicionando elementos no início do array

console.log('Adicionando elementos ao inicio do array')

numeros.unshift(0)
console.log(numeros) // Retorno: [0, 1, 2, 3]

console.log('----------------------------------')

// Adicionando elementos no meio do array

console.log('Adicionando elementos no meio do array')

numeros.splice(1,0,'a')
console.log(numeros) // Retorno: [0, 'a', 1, 2, 3]

console.log('----------------------------------')

// Adicionando elementos no final do array

console.log('Adicionando elementos no final do array')

numeros.push(5)
console.log(numeros) // Retorno: [0, 'a', 1, 2, 3, 5]

console.log('----------------------------------')

// Encontrando elementos no array (primitivos)

console.log('Encontrando elementos no array (primitivo)')

const num = [1, 2, 3, 4]
console.log(num.indexOf(2)) // Retorno: 1

const n = [1, 2, 3, 1, 4]
console.log(n.lastIndexOf(1)) // Retorna: 3 (última ocorrência do elemento passado)
console.log(num.indexOf(2) !== -1) // Retorna: true
console.log(num.includes(2)) // Retorna: true

console.log('----------------------------------')

// Encontrando elementos no array (referência)

console.log('Encontrando elementos no array (referência)')

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
    {id: 3, nome: 'c'}
]

// console.log(marcas.includes({id: 1, nome: 'a'})) 
// Retorna: false (pois como se trata de objetos não possuem a mesma referência)

function isA(marca) {
    return marca.nome === 'a'
}
console.log(marcas.find(isA)) // Retorna: {id: 1, nome: 'a'}

console.log('----------------------------------')

// Removendo elementos de um array

console.log('Removendo elementos de um array')

const numbers = [1, 2, 3, 4, 5, 6]
console.log('Array Original: [' + numbers + ']')

// Removendo elemento no final
console.log('Removendo elemento do final:')
numbers.pop()
console.log(numbers) // Retorna [1, 2, 3, 4, 5]

console.log('----------------------------------')

// Removendo elemento do início
console.log('Removendo elemento do início:')
numbers.shift()
console.log(numbers) // Retorna [2, 3, 4, 5]

console.log('----------------------------------')


// Removendo elemento do meio:
console.log('Removendo elemento do meio:')
numbers.splice(2, 1)
console.log(numbers) // Retorna [2, 3, 5]

console.log('----------------------------------')


// Esvaziando um array

console.log('Esvaziando um array')

let letras = ['a', 'b', 'c', 'd', 'e', 'f']
let outros = letras
console.log('Array Original: [' + letras + ']')

// Solução 1 (Vai esvaziar apenas a primeira referência (variável letras, mantendo a variável outros))
// console.log('Solução 1:')
// letras = []
// console.log(outros)

// Solução 2: (mais indicado)
console.log('Solução 2: (mais indicado)')
letras.length = 0
console.log(letras)
console.log(outros)

// Solução 3:
// console.log('Solução 3:')
// letras.splice(0, letras.length)
// console.log(letras)
// console.log(outros)

// Solução 4:
// console.log('Solução 4:')
// while(letras.length > 0)
//     letras.pop()
// console.log(letras)
// console.log(outros)

console.log('----------------------------------')

// Combinando e cortando arrays
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]
console.log(primeiro) // Retorna [1, 2, 3]
console.log(segundo) // Retorna [4, 5, 6]

// Combinando arrays
const combinado = primeiro.concat(segundo)
console.log(combinado) // Retorna [1, 2, 3, 4, 5, 6]

console.log('----------------------------------')


// Dividindo Arrays
const cortado = combinado.slice(1,3) 
console.log(cortado) // Retorna [2, 3]