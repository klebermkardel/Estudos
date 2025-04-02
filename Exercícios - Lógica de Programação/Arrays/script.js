/*

Peça para o usuário inserir 5 números, armazene-os em um array e calcule a média.

Exemplo de entrada: [10, 20, 30, 40, 50]
Saída esperada: A média é 30.

*/

const numeros = []

let soma = 0

for(i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt("Insira um número:")))
    soma += numeros[i]
}

const media = soma/5
console.log(`A média dos valores informados é ${media}`)

