/* 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho. */

const nome = prompt("Informe o nome de funcionárie: ")
const sal = parseFloat(prompt(`Informe o salário atual de ${nome}`))

let meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" 
]

let dataAtual = new Date()
let mesAtual = dataAtual.getMonth()

let nomeMesAtual = meses[mesAtual]

alert(`Nome de funcionárie: ${nome}
Salário: ${sal}
U funcionárie ${nome} tem um salário de R$ ${sal.toFixed(2)} em ${nomeMesAtual}`)