let n = parseInt(prompt("Digite um número:"))

function parOuImpar(v) {
    if(n % 2 === 0) {
        alert(`O número ${v} é par!`)
    } else {
        alert(`O número ${v} é ímpar!`)
    }
}

parOuImpar(n)