// Leia um número e determine se ele é par ou ímpar.

const num = parseInt(prompt("Informe um número:"))

if(num % 2 === 0) {
    alert(`O número ${num} é par!`)
} else {
    alert(`O número ${num} é ímpar!`)
}