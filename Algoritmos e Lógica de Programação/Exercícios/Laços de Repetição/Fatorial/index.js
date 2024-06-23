// Leia um número e calcule seu fatorial.

let num = parseInt(prompt("Digite um número:"))
let result = 1
let i = num

while(i > 1) {
    result *= i
    i--
}

alert(`${num}! = ${result}`)