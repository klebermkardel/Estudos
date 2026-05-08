function mediaDeNotas(notas) {
    const soma = notas.reduce((acc, n) => acc + n, 0)
    return soma / notas.length
}

const notas = [4, 6, 7, 9]

console.log(mediaDeNotas(notas))