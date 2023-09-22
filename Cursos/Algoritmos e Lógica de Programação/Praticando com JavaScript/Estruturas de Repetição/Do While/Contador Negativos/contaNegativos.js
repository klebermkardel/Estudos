contador = 1
totN = 0

do {
    let N = parseInt(prompt("Digite um número:"))
    if(N < 0) {
        totN++
    }
    contador++  
} while (contador <= 5)

if(totN === 0) {
    alert(`Você não digitou números negativos`)
} else if (totN === 1) {
    alert(`Você digitou apenas ${totN} número negativo`)
} else {
    alert(`Você digitou ${totN} números negativos`)
}
