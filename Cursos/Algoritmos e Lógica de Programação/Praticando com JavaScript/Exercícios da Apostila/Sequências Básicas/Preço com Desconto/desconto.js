const preco = parseFloat(prompt("Qual o preço do produto?"))

const desconto = preco * 0.05

const precoPromocional = preco - desconto

alert(`O valor final com desconto é R$ ${precoPromocional.toFixed(2)}`)