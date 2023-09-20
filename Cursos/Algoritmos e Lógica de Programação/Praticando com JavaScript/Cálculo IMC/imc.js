let peso, altura, imc 

peso = parseFloat(prompt("Informe o seu peso: "))
altura = parseFloat(prompt("Informe a sua altura: "))

imc = peso / (Math.pow(altura, 2))

if(imc < 17) {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Muito abaixo do peso`)
} else if (imc >= 17 && imc <= 18.5) {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Abaixo do peso`)
} else if (imc >= 18.5 && imc < 25) {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Peso ideal`)
} else if (imc >= 25 && imc < 30) {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Sobrepeso`)
} else if (imc >= 30 && imc < 35) {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Obesidade`)
} else if (imc >= 35 && imc < 40) {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Obesidade Severa`)
} else {
    alert(`IMC: ${imc.toFixed(2)}\n Situação: Obesidade Mórbida`)
}