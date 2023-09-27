let contador = 1
let N, R

N = parseInt(prompt("De qual número você deseja saber a tabuada?"))

do {
    R = N * contador
    console.log(`${N} x ${contador} = ${R}`)
    contador++
} while (contador <= 10)