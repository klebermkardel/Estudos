let vetor = new Array(20)

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * 99) + 1
}

let vetorFormatado = '[ ' + vetor.join(', ') + ' ]'

console.log(`Vetor Original: ${vetorFormatado}`)

let vetorOrdenado = vetor.sort(function(a, b) {
    return a - b
})

let vetorOrdenadoFormatado = '[ ' + vetorOrdenado.join(', ') + ' ]'

console.log(`Vetor Ordenado: ${vetorOrdenadoFormatado}`)

