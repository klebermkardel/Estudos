// Leia dois números e exiba o maior deles.

const n1 = parseInt(prompt("Informe o 1º número:"))
const n2 = parseInt(prompt("Informe o 2º número"))

if(n1 > n2) {
    alert(`O primeiro número é maior que o segundo`)
} else if(n2 > n1) {
    alert(`O segundo número é maior que o primeiro`)
} else {
    alert(`Os dois números são iguais`)
}