let peso, altura, imc 

peso = parseFloat(prompt("Informe o seu peso: "))
altura = parseFloat(prompt("Informe a sua altura: "))

imc = peso / (Math.pow(altura, 2))

if(imc >= 18.5 && imc < 25) {
    alert(`IMC: ${imc.toFixed(2)}\n Parabéns, você está no seu peso ideal!`)
} else {
    alert(`IMC: ${imc.toFixed(2)}\n Você não está na faixa de peso ideal!`)
}