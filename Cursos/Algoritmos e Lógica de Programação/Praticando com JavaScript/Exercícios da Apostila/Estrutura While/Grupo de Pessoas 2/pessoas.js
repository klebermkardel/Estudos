let totH = 0
let sIdH = 0
let maiorIdade = 0
let mulMJov = Number.MAX_VALUE
let mediaIdH
let resp 

while(true) {
    let sexo = prompt("Informe o sexo da pessoa: [H/M]")
    let idade = parseInt(prompt("Informe a idade dessa pessoa:"))

    if(sexo === 'H') {
        totH++
        sIdH += idade
    } else if(sexo === 'M') {
        if(idade < mulMJov) {
            mulMJov = idade
        }
    }

    if(idade > maiorIdade) {
        maiorIdade = idade
    }

    resp = prompt("Deseja continuar? [S/N]")
    if(resp !== 'S') {
        break
    }
}

mediaIdH = sIdH / totH

alert(`Maior idade lida: ${maiorIdade}\nTotal de homens cadastrados: ${totH}\nIdade da mulher mais jovem: ${mulMJov}\nMédia da idade entre os homens: ${mediaIdH}`)