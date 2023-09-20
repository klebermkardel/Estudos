let n1, n2

n1 = parseFloat(prompt("Primeira nota: "))
n2 = parseFloat(prompt("Segunda nota: "))

media = (n1+n2)/2

if(media < 7) {
    alert(`Média: ${media}\n Situação: Aluno Reprovado`)
} else {
    alert(`Média: ${media}\n Situação: Aluno Aprovado`)
}


