/*

Desafio Rápido de Fixação
Para garantir que você fixou esse conteúdo antes de avançarmos para os Objetos, crie um pequeno arquivo e tente resolver essa única situação:

Você tem a seguinte string vinda de um relatório antigo:

const dadoBruto = "     O valor do curso de JS é de R$-450.90      ";

Sua missão:

Limpe os espaços em branco das pontas.

Descubra e isole apenas o número negativo -450.90

Transforme o resultado em um número positivo usando Math.abs().

Formate esse valor para a moeda brasileira correta (R$ 450,90).

*/

const dadoBruto = "      O valor do curso de JS é de R$ -450.90      ";

// 1. Limpa os espaços em branco das extremidades da string
const stringFormatada = dadoBruto.trim();

// 2. Remove o texto explicativo, extrai o valor absoluto (positivo) e formata como Real (BRL)
const valorDoCurso = Math.abs(
    stringFormatada.replace("O valor do curso de JS é de R$", "")
).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// 3. Exibe o resultado final tratado no terminal
console.log("O valor do curso de JS é de " + valorDoCurso);




