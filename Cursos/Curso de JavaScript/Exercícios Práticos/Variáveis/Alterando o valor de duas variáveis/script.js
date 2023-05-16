// Exercício - Declare duas variáveis e atribua a elas valores diferentes. Em seguida, atribua o valor de uma variável à outra.

let cidade1 = 'São Paulo'
let cidade2 = 'Rio de Janeiro'

console.log(cidade1) // Retorna: São Paulo
console.log(cidade2) // Retorna: Rio de Janeiro

console.log('-----------------------------')

cidade3 = cidade1
cidade1 = cidade2

console.log(cidade1) // Retorna: Rio de Janeiro
console.log(cidade3) // Retorna: São Paulo