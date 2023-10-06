let qtdNumeros = 0
let soma = 0
let menorNum = Number.MAX_VALUE
let media
let qtdPares = 0
let resp 

do {
    let num = parseInt(prompt("Digite um número"))

    soma += num
    qtdNumeros++

    if(num < menorNum) {
        menorNum = num
    }

    if(num % 2 === 0) {
        qtdPares++
    }

    resp = prompt("Deseja continuar? [S/N]")
} while (resp === 'S')

media = soma / qtdNumeros

alert(`Soma: ${soma}\nMenor número: ${menorNum}\nMédia: ${media}\nNúmeros pares: ${qtdPares}`)