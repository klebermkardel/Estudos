const qtdHoras = parseInt(prompt("Informe a quantidade de horas que você praticou atividades físicas neste mês: "))

let pontos = 0

let valor = 0

if(qtdHoras < 10) {
    pontos = qtdHoras * 2
    valor = pontos * 0.05
    alert(`Quantidade de horas no mês: ${qtdHoras}\nTotal de pontos: ${pontos}\nValor total: R$ ${valor.toFixed(2)}`)
} else if(qtdHoras >= 10 && qtdHoras < 20) {
    pontos = qtdHoras * 5
    valor = pontos * 0.05
    alert(`Quantidade de horas no mês: ${qtdHoras}\nTotal de pontos: ${pontos}\nValor total: R$ ${valor.toFixed(2)}`)
} else {
    pontos = qtdHoras * 10
    valor = pontos * 0.05
    alert(`Quantidade de horas no mês: ${qtdHoras}\nTotal de pontos: ${pontos}\nValor total: R$ ${valor.toFixed(2)}`)
}



