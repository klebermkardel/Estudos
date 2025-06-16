/* 

Crie uma função chamada calcularMedia que:

Receba 4 notas como parâmetros

Calcule a média das notas

Retorne uma mensagem dizendo se o aluno foi aprovado ou reprovado

Aprovado: média maior ou igual a 7

Reprovado: média menor que 7

*/

function calcularMedia(nota1, nota2, nota3, nota4){
    const media = (nota1 + nota2 + nota3 + nota4) / 4

    if(media >= 7) {
        return `Aprovado com média ${media}`
    } else {
        return `Reprovado com média ${media}`
    }
}

console.log(calcularMedia(5, 7, 4, 7))