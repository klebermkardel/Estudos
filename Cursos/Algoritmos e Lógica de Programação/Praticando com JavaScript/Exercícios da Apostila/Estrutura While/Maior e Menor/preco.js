let c = 1
let maior = 0.00
let menor = Infinity

while (c <= 8) {
    let preco = parseFloat(prompt(`Digite o preço do ${c}º produto: `))
    if(preco > maior) {
        maior = preco
    } 

    if(preco < menor) {
        menor = preco
    }
    c++
}

alert(`Maior preço: R$ ${maior.toFixed(2)}\nMenor preço: R$ ${menor.toFixed(2)}`)