let n, f

n = parseInt(prompt("Digite um número"))
f = fatorial(n)

function fatorial(v) {
    let i
    let r = 1

    for(i = 1; i <= v; i++) {
        r = r * i
    }
    return r
}

alert(`O valor de ${n}! é igual a ${f}`)