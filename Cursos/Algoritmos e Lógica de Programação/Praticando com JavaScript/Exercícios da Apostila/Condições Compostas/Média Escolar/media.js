const n1 = parseFloat(prompt("Digite a primeira nota:"))
const n2 = parseFloat(prompt("Digite a segunda nota:"))
const media = (n1+n2)/2

if(media < 5) {
    alert(`Média: ${media}\nInfelizmente você foi reprovado!`)
} else if(media >= 5 && media < 7) {
    alert(`Média: ${media}\nVocê ficou de recuperação!`)
} else {
    alert(`Média: ${media}\nParabéns, você foi APROVADO!`)
}