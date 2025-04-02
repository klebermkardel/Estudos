/* Peça para o usuário digitar dois números e exiba a soma deles. 

Exemplo de entrada:
Número 1: 5
Número 2: 7
Saída esperada: A soma é 12

*/

// Solicita ao usuário os dois números a serem somados e os guardam em suas respectivas variável 
const num1 = parseInt(prompt("Digite o primeiro número: "))
const num2 = parseInt(prompt("Digite o segundo número: "))

// Realiza o cálculo da soma e guarda o resultado em usa variável
const soma = num1 + num2

// Exibe no console o resultado final com uma mensagem personalizada
console.log(`A soma entre ${num1} e ${num2} é de ${soma}`);

