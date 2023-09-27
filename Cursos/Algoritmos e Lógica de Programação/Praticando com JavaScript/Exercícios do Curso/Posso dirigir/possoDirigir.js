let anoAtual, anoNasc, idade, apto

anoAtual = parseInt(prompt("Ano Atual (yyyy): "))
anoNasc = parseInt(prompt("Ano de Nascimento (yyyy): "))

idade = anoAtual - anoNasc 

if(idade >= 18) {
    apto = true
} else {
    apto = false
}

if(apto) {
    alert(`-------- STATUS --------\n IDADE: ${idade} anos\nAPTO A TIRAR CARTEIRA\n ------------------------`)
} else {
    alert(`-------- STATUS --------\n IDADE: ${idade} anos\nINAPTO A TIRAR CARTEIRA\n ------------------------`)
}