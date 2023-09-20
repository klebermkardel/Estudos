let valorProduto, imposto

valorProduto = parseFloat(prompt("Qual o valor do produto?"))

imposto = valorProduto * 60 / 100

alert(`O valor do imposto será de US$${imposto.toFixed(2)}`)