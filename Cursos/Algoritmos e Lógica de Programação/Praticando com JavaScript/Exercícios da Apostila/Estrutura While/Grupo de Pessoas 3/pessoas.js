let pessoaMaisVelha = ""
let idadePMaiVelha = 0
let mulMJov = ""
let idadeMulMJov = Number.MAX_VALUE
let totP = 0
let somaId = 0
let mediaId
let hMai30 = 0
let mMen18 = 0
let resp

while(true) {
    let nome = prompt("Informe o nome da pessoa")
    let sexo = prompt("Informe o sexo dessa pessoa: [H/M]")
    let idade = parseInt(prompt("Informe a idade dessa pessoa:"))

    somaId += idade
    totP++

    if(idade > idadePMaiVelha) {
        idadePMaiVelha = idade
        pessoaMaisVelha = nome
    }

    if(sexo === "M" && idade < idadeMulMJov) {
        idadeMulMJov = idade
        mulMJov = nome
    }

    if(sexo === 'H' && idade > 30) {
        hMai30++
    } else if(sexo === "M" && idade < 18) {
        mMen18++
    }

    resp = prompt("Deseja continuar? [S/N]")
    if(resp !== 'S') {
        break
    }
}

mediaId = somaId / totP

alert(`Pessoa mais velha: ${pessoaMaisVelha}\nMulher mais jovem: ${mulMJov}\nMédia de idade:: ${mediaId}\nHomens com mais de 30 anos: ${hMai30}\nMulheres com menos de 18 anos: ${mMen18}`)