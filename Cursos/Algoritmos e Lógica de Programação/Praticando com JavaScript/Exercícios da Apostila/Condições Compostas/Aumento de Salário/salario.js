const nome = prompt("Qual o seu nome?")
const sal = parseFloat(prompt("Informe o seu salário:"))
const anos = parseInt(prompt("Quantos anos você está na empresa?"))

if(anos >= 1 && anos <= 3) {
    const aumento = sal * 0.03
    const nSal = sal + aumento
    alert(`Seu novo salário será de R$ ${nSal.toFixed(2)}`)
} else if(anos > 3 && anos < 10) {
    const aumento = sal * 0.125
    const nSal = sal + aumento
    alert(`Seu novo salário será de R$ ${nSal.toFixed(2)}`)
} else {
    const aumento = sal * 0.2
    const nSal = sal + aumento
    alert(`Seu novo salário será de R$ ${nSal.toFixed(2)}`)
}