/*
 
Solicite um número ao usuário e informe se ele é par ou ímpar.

Exemplo de entrada: 6
Saída Esperada: O número é par

*/

// Solicita um número ao usuário e o guarda em sua variável

const num = parseInt(prompt("Digite um número: "))

// Verifica se o número é par ou ímpar, armazena a informação em uma variável e exibe o resultado no console de acordo com sua condição
const resultado = num % 2 === 0 ? console.log(`O número ${num} é par`) : console.log(`O número ${num} é ímpar`)

console.log(resultado)