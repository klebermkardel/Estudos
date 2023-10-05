let somatorio = 0

while (true) {
  let numero = parseInt(prompt("Digite um número (ou 1111 para encerrar):"))

  if (numero === 1111) {
    break
  }

  somatorio += numero
}

alert(`O somatório dos números é: ${somatorio}` )
