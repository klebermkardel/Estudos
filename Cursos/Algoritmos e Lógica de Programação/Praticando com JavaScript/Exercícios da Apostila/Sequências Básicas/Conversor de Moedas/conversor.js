/* Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,01. */

let reais, dolares

reais = parseFloat(prompt("Quantos reais você possui? "))
dolares = reais / 5.01

alert(`Você pode comprar US$${dolares.toFixed(2)}`)