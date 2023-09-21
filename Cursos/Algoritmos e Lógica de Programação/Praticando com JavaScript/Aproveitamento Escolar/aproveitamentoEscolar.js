let n1, n2, n3, n4, media, apr

n1 = parseFloat(prompt("Informe a nota do 1º bimestre: "))
n2 = parseFloat(prompt("Informe a nota do 2º bimestre: "))
n3 = parseFloat(prompt("Informe a nota do 3º bimestre: "))
n4 = parseFloat(prompt("Informe a nota do 4º bimestre: "))

media = (n1+n2+n3+n4)/4

if(media <= 10 && media >= 9) {
    apr = "A"
    alert(`Média do aluno: ${media}\nAproveitamento: ${apr}`)
} else if(media >= 8 && media < 9) {
    apr = "B"
    alert(`Média do aluno: ${media}\nAproveitamento: ${apr}`)
} else if(media >= 7 && media < 8) {
    apr = "C"
    alert(`Média do aluno: ${media}\nAproveitamento: ${apr}`)
} else if(media >= 6 && media < 7) {
    apr = "D"
    alert(`Média do aluno: ${media}\nAproveitamento: ${apr}`)
} else if(media >= 5 && media < 6) {
    apr = "E"
    alert(`Média do aluno: ${media}\nAproveitamento: ${apr}`)
} else {
    apr = "F"
    alert(`Média do aluno: ${media}\nAproveitamento: ${apr}`)
}
