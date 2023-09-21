let reais, dolares, qntd 
let contador = 1

qntd = parseInt(prompt("Quantas vezes você quer converter?"))

while(contador <= qntd) {
    reais = parseFloat(prompt("Quantos reais você possui? "))
    dolares = reais / 4.85

    alert(`Você pode comprar US$${dolares.toFixed(2)}`)

    contador++
}

