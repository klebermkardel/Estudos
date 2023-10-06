let qtdIdade = 0
let somaId = 0
let media
let m20 = 0
let resp 

do {
    let idade = parseInt(prompt("Digite uma idade:"))

    qtdIdade++
    somaId += idade

    if(idade >= 21) {
        m20++
    }

    resp = prompt("Deseja continuar? [S/N]")
} while (resp === 'S')

media = somaId / qtdIdade

alert(`Idades digitadas: ${qtdIdade}\nMédia das idades: ${media}\nPessoas com 21 anos ou mais: ${m20}`)