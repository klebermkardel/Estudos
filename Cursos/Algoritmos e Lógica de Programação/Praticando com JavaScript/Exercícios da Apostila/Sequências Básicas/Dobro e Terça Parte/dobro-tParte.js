/* 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666 */

const num = parseFloat(prompt("Digite um número:"))

const dobro = num * 2
const tParte = num / 3

alert(`O dobro de ${num} é ${dobro}
A terça parte de ${num} é ${tParte.toFixed(5)}`)