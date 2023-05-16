// Operadores Lógicos

// Operador Lógico E (&&)
// Retorna TRUE se os dois operandos forem TRUE

// console.log("Operador &&")

// console.log(true && true) // retorna true
// console.log(false && false) // retorna false
// console.log(true && false) // retorna false
// console.log(false && true) // retorna false

// console.log("Exemplo:")
// let maiorDeIdade = true
// let possuiCarteiraDeTrabalho = true
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

// console.log(podeAplicar) // retorna true

console.log("-------------------")

// Operador Lógico OU (||)
// Retorna TRUE se um dos dois operandos forem TRUE

console.log("Operador ||")

console.log(true || true) // retorna true
console.log(false || false) // retorna false
console.log(true || false) // retorna true
console.log(false || true) // retorna true

console.log("Exemplo:")
let maiorDeIdade = false
let possuiCarteiraDeTrabalho = false
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log('Pode aplicar: ', podeAplicar) // retorna true

// Operador NOT (!)
// Retorna false se for true e true se for false
let candidatoRecusado = !podeAplicar // retorna false

console.log('Candidado Recusado: ', candidatoRecusado) // retorna true