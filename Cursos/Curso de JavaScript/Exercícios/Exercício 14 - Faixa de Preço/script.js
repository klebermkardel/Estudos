// Exercício Faixa de Preço

// Criar um array de objetos de faixa de preço para que possa ser usado em um site igual o Mercado Livre

// Primeira Opção
let faixas = [
    {tooltip: 'até R$ 700,00', minimo: 0, maximo: 700},
    {tooltip: 'de R$ 700,00 a R$ 1000,00', minimo: 700, maximo: 1000},
    {tooltip: 'R$ 1000,00 ou mais', minimo: 1000, maximo: 9999999}
]

// Segunda Opção (Factory Function)
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,9999999)
]

// Terceira Opção (Constructor Function)

function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('a', 1, 100),
    new FaixaPreco('b', 100, 1000),
    new FaixaPreco('c', 1000, 9999999)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)

