function parOuImpar(n) {
    return n % 2 === 0 ? "par" : "ímpar"
}

const n = 6
console.log(`${n} é ${parOuImpar(n)}`)