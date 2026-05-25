/*

Exercício 9: Calculando o IMC do Atleta (Arrow Function Tradicional)

Contexto: Você quer criar uma calculadora rápida de Índice de Massa Corporal (IMC) para monitorar sua saúde física para o basquete.

O Desafio:

1. Crie uma Arrow Function chamada calcularIMC que recebe dois parâmetros: peso e altura.

2. Dentro dela, use a fórmula padrão: IMC = \frac{peso}{altura^2}$ (ou peso / (altura * altura)).

3. Use o return para devolver o resultado e exiba-o no console fora da função.

*/

// Declara a Arrow Function de linha única para cálculo de IMC (peso dividido por altura ao quadrado)
const calcularIMC = (altura, peso) => peso / altura**2;

// Invoca a função passando a altura em metros (1.75) e o peso em kg (100)
// e formata o retorno diretamente no console com duas casas decimais
console.log("O seu IMC é de: " + calcularIMC(1.75, 100).toFixed(2));