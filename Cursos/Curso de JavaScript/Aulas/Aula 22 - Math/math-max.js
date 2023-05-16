// math.max -> retorna o maior valor dentro de um array
// math.min -> retorna o menor valor dentro de um array

// Retorno esperado: 3
console.log(Math.max(1, 3, 2))

// Retorno esperado: -1
console.log(Math.max(-1, -3. -2))


const array1 = [1, 3, 2];

// Retorno esperado: 3
console.log(Math.max(...array1));


const arr = [1, 2, 3, 10, 64];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);

// Retorno esperado: 64
console.log(max)



