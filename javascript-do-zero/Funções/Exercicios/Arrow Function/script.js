/* 

Crie uma arrow function que receba dois números, calcule a média e diga se o aluno está aprovado (média >= 7).

*/

// Função arrow que recebe dois números e retorna a média deles
const media = (num1, num2) => (num1 + num2) / 2

// Calcula a média chamando a função com dois valores
const resultado = media(8, 6)

// Verifica se o resultado é maior ou igual a 7 para determinar aprovação
if (resultado >= 7) {
    console.log(`Você foi aprovado com média ${resultado}`)
} else {
    console.log(`Você foi reprovado com média ${resultado}`)
}

// Arrow function reutilizável
const verificarAprovacao = (nota1, nota2) => {
    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        return `Você foi aprovado com média ${media}`;
    } else {
        return `Você foi reprovado com média ${media}`;
    }
};

// Chamadas da função
console.log(verificarAprovacao(8, 6)); // Saída: Você foi aprovado com média 7
console.log(verificarAprovacao(5, 4)); // Saída: Você foi reprovado com média 4.5