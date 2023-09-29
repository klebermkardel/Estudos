const nome = prompt("Qual o seu nome?")
const sexo = prompt("Qual o seu sexo? [M/F]")
const preco = parseFloat(prompt("Qual o valor do produto?"))

if(sexo === "F") {
    const desconto = preco * 0.13
    const precoFinal = preco - desconto

    alert(`Valor do produto: R$ ${preco.toFixed(2)}\n Valor com desconto: R$ ${precoFinal.toFixed(2)}`)
} else {
    const desconto = preco * 0.05
    const precoFinal = preco - desconto

    alert(`Valor do produto: R$ ${preco.toFixed(2)}\n Valor com desconto: R$ ${precoFinal.toFixed(2)}`)
}