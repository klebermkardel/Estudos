let val = []
let totPar = 0

for (i = 1; i <= 7; i++) {
    val.push(parseInt(prompt(`Digite o ${i}º valor:`)))
    
    if (val[i - 1] % 2 === 0) { 
        totPar++
    }
}

for (i = 0; i < val.length; i++) {
    if (val[i] % 2 === 0) {
        console.log(`Valor par na posição ${i}: ${val[i]}`)
    }
}

console.log(`O total de números pares digitados foi ${totPar}`)

