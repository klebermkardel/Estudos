let c = 1

let somaId = 0
let media = 0
let maior18 = 0
let menor5 = 0
let maiorId = 0

while (c <= 10) {
    let idade = parseInt(prompt(`Informe a idade da ${c}º pessoa:`))
    somaId += idade

    if(idade > 18) {
        maior18++
    }

    if(idade < 5) {
        menor5++
    }

    if(idade > maiorId) {
        maiorId = idade
    }
    c++
}

media = somaId / 10

alert(`Média da idade do grupo: ${media}\nMaiores de 18 anos: ${maior18}\nMenor que 5 anos: ${menor5}\nMaior idade: ${maiorId}`)