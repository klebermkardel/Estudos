// Leia as 4 notas de um aluno e calcule a sua média. Caso a média seja igual ou maior que 7, informe que o aluno foi aprovado, se não, informe que o aluno foi reprovado

const n1 = parseFloat(prompt("Digite a 1ª nota:"))
const n2 = parseFloat(prompt("Digite a 2ª nota:"))
const n3 = parseFloat(prompt("Digite a 3ª nota:"))
const n4 = parseFloat(prompt("Digite a 4ª nota:"))

const media = (n1+n2+n3+n4)/4

if(media >= 7) {
    alert(`Aluno aprovado`)
} else {
    alert(`Aluno reprovado`)
}
