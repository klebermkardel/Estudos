const num = Math.floor(Math.random() * 100) + 1

const palpite = parseInt(prompt("Escolha um número entre 1 e 100:"))

if(palpite < num) {
    alert(`Você chutou um número menor! O número era ${num}`)
} else if(palpite > num) {
    alert(`Você chutou um número maior! O número era ${num}`)
} else { 
    alert(`Parabéns, você acertou!`)
}