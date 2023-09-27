/* Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

Ex:

Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5 */

const nome = prompt("Informe o nome du alune:")
const n1 = parseFloat(prompt("Informe a primeira nota:"))
const n2 = parseFloat(prompt("Informe a segunda nota:"))

const media = (n1+n2)/2

alert(`U alune ${nome} tirou as notas ${n1} e ${n2} e obteve média ${media}`)