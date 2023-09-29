const v = parseFloat(prompt("Qual a velocidade do carro?"))
const vMax = 80.0

if(v > vMax) {
    const vUltrapassada = v - vMax
    const multa = 5.00
    const valorMulta = vUltrapassada * multa

    alert(`Velocidade medida: ${v.toFixed(2)}Km
    Velocidade máxima: ${vMax.toFixed(2)}Km
    Você ultrapassou ${vUltrapassada.toFixed(2)}Km acima do limite permitido.
    Valor da multa: R$ ${valorMulta.toFixed(2)}`)
} else {
    alert("Velocidade dentro do limite permitido. Você não foi multado.");
}