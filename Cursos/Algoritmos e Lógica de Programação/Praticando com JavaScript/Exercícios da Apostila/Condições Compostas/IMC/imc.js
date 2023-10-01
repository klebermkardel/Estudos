const peso = parseFloat(prompt("Informe o seu peso: "))
const altura = parseFloat(prompt("Informe a sua altura: "))

const imc = peso / altura ** 2

if(imc < 18.5) {
    alert(`IMC: ${imc.toFixed(2)}\nAbaixo do peso`)
} else if(imc >= 18.5 && imc < 25) {
    alert(`IMC: ${imc.toFixed(2)}\nPeso ideal`)
} else if(imc >= 25 && imc < 30) {
    alert(`IMC: ${imc.toFixed(2)}\nAcima do peso`)
} else if(imc >= 30 && imc < 35) {
    alert(`IMC: ${imc.toFixed(2)}\nObesidade Grau 1`)
} else if(imc >= 35 && imc < 40) {
    alert(`IMC: ${imc.toFixed(2)}\nObesidade Grau 2`)
} else {
    alert(`IMC: ${imc.toFixed(2)}\nObesidade Grau 3`)
}