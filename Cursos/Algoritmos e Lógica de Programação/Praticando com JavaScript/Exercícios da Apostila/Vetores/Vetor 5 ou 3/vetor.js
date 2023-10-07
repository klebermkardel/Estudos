let vetor = new Array(10)

for (let i = 0; i < vetor.length; i++) {
    if (i % 2 === 0) {
        vetor[i] = 5
    } else {
        vetor[i] = 3
    }
}

let vetorFormatado = '[ ' + vetor.join(', ') + ' ]'

alert(vetorFormatado)
