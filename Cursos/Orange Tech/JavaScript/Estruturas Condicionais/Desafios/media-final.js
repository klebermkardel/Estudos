// 1 - Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule a sua média e a sua classificação conforme a tabela baixo

let n1 = 4;
let n2 = 4;
let n3 = 4.9;

const media = (n1+n2+n3)/3;

console.log('Sua média foi de ' + media.toFixed(2));


if(media < 5){
    console.log('Você foi reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Você ficou de recuperação');
} else {
    console.log('Parabéns, você foi aprovado');
}