let vetor = new Array(15)

for (let i = 0; i < vetor.length; i++) {
    if (i < 2) {
        vetor[i] = 1
    } else {
        vetor[i] = vetor[i - 1] + vetor[i - 2]
    }
}

let vetorFormatado = '[ ' + vetor.join(', ') + ' ]'

alert(vetorFormatado)
