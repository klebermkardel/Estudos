let c = 1

let mediaAlt = 0
let m90Kg = 0
let m50M160 = 0
let m190M100 = 0
let somaAlt = 0

while (c <= 7) {
    let alt = parseFloat(prompt(`Informe a altura da ${c}º pessoa:`))
    let p = parseFloat(prompt(`Informe o peso da ${c}º pessoa:`))

    somaAlt += alt

    if(p > 90) {
        m90Kg++
    }

    if(p < 50 && alt < 1.60) {
        m50M160++
    }

    if(alt > 1.90 && p > 100) {
        m190M100++
    }
    
    c++
}

mediaAlt = somaAlt / 7

alert(`Média da altura: ${mediaAlt.toFixed(2)}m\nAcima de 90Kg: ${m90Kg}\nAbaixo de 50Kg e menor que 1.60m: ${m50M160}\nMaior que 1.90 e acima de 100Kg: ${m190M100}`)
