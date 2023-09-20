let reais, dolares

reais = parseFloat(prompt("Quantos reais você possui? "))
dolares = reais / 4.85

alert(`Você pode comprar US$${dolares.toFixed(2)}`)