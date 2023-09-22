let sTotal = 0
let media, v
let div5 = 0
let nulos = 0
let sPares = 0

for(c = 1; c <= 5; c++) {
    v = parseFloat(prompt(`Digite o ${c}º valor: `))
    sTotal = sTotal + v
    media = sTotal / 5
    if(v % 5 === 0) {
        div5++
    }
    if(v === 0) {
        nulos++
    }
    if(v % 2 === 0) {
        sPares = sPares + v
    }
}

alert(`Soma total: ${sTotal}\n
Média: ${media}\n
Divisíveis por 5: ${div5}\n
Nulos: ${nulos}\n
Soma dos pares: ${sPares}`)