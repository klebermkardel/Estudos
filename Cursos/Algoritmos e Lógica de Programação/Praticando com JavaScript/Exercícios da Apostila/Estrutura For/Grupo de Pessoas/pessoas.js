let totP = 8
let totM = 0
let mH100 = 0
let mediaPM
let somaPM = 0
let maiPH = 0

for(i = 1; i <= totP; i++) {
    let sexo = prompt("Informe o sexo da pessoa: [H/M]")
    let peso = parseFloat(prompt("Informe o peso dessa pessoa:"))

    if(sexo === 'M') {
        totM++
        somaPM += peso
    }

    if(sexo === 'H' && peso > 100) {
        mH100++
    }

    if(sexo === 'H' && peso > maiPH) {
        maiPH = peso
    }
}

mediaPM = somaPM / totM

alert(`Total de mulheres: ${totM}\nHomems com mais de 100Kg: ${mH100}\nMédia de peso das mulheres: ${mediaPM}\nHomem com maior peso: ${maiPH}`)
