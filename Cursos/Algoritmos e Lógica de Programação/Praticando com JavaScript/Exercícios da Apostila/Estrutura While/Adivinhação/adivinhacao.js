const numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 4

while (tentativas > 0) {
    const palpite = parseInt(prompt(`Tentativas restantes: ${tentativas}\nEscolha um número entre 1 e 100:`))

    if (palpite < numeroAleatorio) {
        alert(`Você chutou um número menor!`)
    } else if (palpite > numeroAleatorio) {
        alert(`Você chutou um número maior!`)
    } else {
        alert(`Parabéns, você acertou! O número era ${numeroAleatorio}`)
        break
    }

    tentativas--
}

if (tentativas === 0) {
    alert(`Suas tentativas acabaram! O número era ${numeroAleatorio}`)
}
