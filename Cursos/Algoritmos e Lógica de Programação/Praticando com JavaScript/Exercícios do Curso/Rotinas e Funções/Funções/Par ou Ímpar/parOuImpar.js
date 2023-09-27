let n = parseInt(prompt("Digite um número"))

function parOuImpar(v) {
    if(v%2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}

r = parOuImpar(n)
alert(`O número ${n} é ${r}`)