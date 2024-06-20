// Escreva um algoritmo que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e exiba o resultado da operação.

const n1 = parseInt(prompt("Digite o 1º número:"))
const n2 = parseInt(prompt("Digite o 2º número"))
const op = prompt("Informe a operação desejada:")

let resultado = undefined

switch(op) {
    case "+":
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        break
    case "-":
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        break
    case "*":
        resultado = n1 * n2
        alert(`${n1} x ${n2} = ${resultado}`)
        break
    case "/":
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        break
    default:
        alert("Selecione uma opção valida para o operador desejado")
}

