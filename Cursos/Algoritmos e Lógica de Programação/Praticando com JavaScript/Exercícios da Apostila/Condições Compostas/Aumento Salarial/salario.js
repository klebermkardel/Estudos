const salAtual = parseFloat(prompt("Qual o seu salário atual? "))
const sexo = prompt("Informe o seu sexo: [H/M]")
const anos = parseInt(prompt("Informe quantos anos você trabalha na empresa:"))

if(sexo === "M") {
    if(anos < 15) {
        const aumento = salAtual * 0.05
        const nSal = salAtual + aumento
        alert(`A partir do próximo mês seu salário será de R$ ${nSal.toFixed(2)}`)
    } else if(anos >= 15 && anos <= 20) {
        const aumento = salAtual * 0.12
        const nSal = salAtual + aumento
        alert(`A partir do próximo mês seu salário será de R$ ${nSal.toFixed(2)}`)
    } else {
        const aumento = salAtual * 0.23
        const nSal = salAtual + aumento
        alert(`A partir do próximo mês seu salário será de R$ ${nSal.toFixed(2)}`)
    }
} else {
    if(anos < 20) {
        const aumento = salAtual * 0.03
        const nSal = salAtual + aumento
        alert(`A partir do próximo mês seu salário será de R$ ${nSal.toFixed(2)}`)
    } else if(anos >= 20 && anos <= 30) {
        const aumento = salAtual * 0.13
        const nSal = salAtual + aumento
        alert(`A partir do próximo mês seu salário será de R$ ${nSal.toFixed(2)}`)
    } else {
        const aumento = salAtual * 0.25
        const nSal = salAtual + aumento
        alert(`A partir do próximo mês seu salário será de R$ ${nSal.toFixed(2)}`)
    }
}