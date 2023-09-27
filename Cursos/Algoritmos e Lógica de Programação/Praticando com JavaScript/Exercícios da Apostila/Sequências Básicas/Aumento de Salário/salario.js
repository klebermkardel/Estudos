const salAtual = parseFloat(prompt("Qual o seu salário?"))

const aumento = salAtual * 0.15

const novoSal = salAtual + aumento 

alert(`Seu novo salário será de R$ ${novoSal.toFixed(2)}`)