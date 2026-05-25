/* 

Exercício 2: Atualizando o Valor das Vagas (Arrow Function + .map())

Contexto: Uma agência de empregos listou salários base para desenvolvedores juniores, mas decidiu aplicar um reajuste de 15% de aumento em todos eles.

O Desafio:

1. Crie o array const salariosBase = [3000, 4000, 5000].

2. Use o método .map() com uma Arrow Function para criar um novo array chamado salariosAtualizados.

3. Cada salário deve ser multiplicado por 1.15 (que representa o aumento de 15%).

4. Exiba o novo array no console.

*/

const salariosBase = [3000, 4000, 5000]

const salariosAtualizados = salariosBase.map(salario => salario * 1.15)

console.log(salariosAtualizados)

salariosAtualizados.forEach(salario => console.log("Novo salário: R$ " + salario.toFixed(2)))