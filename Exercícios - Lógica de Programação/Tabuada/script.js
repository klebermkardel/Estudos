/* Peça ao usuário para inserir um número e exiba a tabuada desse número de 1 a 10.

Exemplo de entrada: 3
 Saída esperada:
 3 x 1 = 3
 3 x 2 = 6
 ...
 3 x 10 = 30

*/

const num = parseInt(prompt("Digite um número: "))

for(i = 0; i <= 10; i++) {
    const resultado = num * i
    console.log(`${num} x ${i} = ${resultado}7`)
}