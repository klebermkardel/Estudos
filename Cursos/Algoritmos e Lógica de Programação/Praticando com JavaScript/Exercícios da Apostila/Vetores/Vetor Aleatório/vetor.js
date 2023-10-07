let vetor = new Array(10)

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * 100) + 1
}

let vetorFormatado = '[ ' + vetor.join(', ') + ' ]'

alert(vetorFormatado)
