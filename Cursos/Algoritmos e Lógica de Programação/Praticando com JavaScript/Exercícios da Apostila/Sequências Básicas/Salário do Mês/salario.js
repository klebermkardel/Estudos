let meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" 
]

let dataAtual = new Date()
let mesAtual = dataAtual.getMonth()

let nomeMesAtual = meses[mesAtual]
let nomeMesSeguinte = meses[mesAtual+1]

const diasTrabalhados = parseInt(prompt(`Quantos dias você trabalhou em ${nomeMesAtual}?`))

const horasTrabalhadas = 8

const valorPorHora = 25.00

const salarioMensal = diasTrabalhados * horasTrabalhadas * valorPorHora

alert(`Seu salário no mês de ${nomeMesSeguinte} será de R$ ${salarioMensal.toFixed(2)}`)