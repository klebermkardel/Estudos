/*

Devido a um bug no sistema de RH, alguns salários de vagas vieram como texto ou vazios: const salarios = [3000, "4500", "Não informado", 5000]. Use o .filter() combinado com Number.isInteger() (ou checando se o tipo é 'number') para salvar em um novo array apenas os números legítimos.

*/

const salarios = [3000, "4500", "Não informado", 5000];

// O método filter isola apenas os números inteiros legítimos, descartando textos e strings
const salariosFiltrados = salarios.filter(salario => Number.isInteger(salario));

// Junta os elementos filtrados em uma string amigável separada por vírgula e espaço
console.log(salariosFiltrados.join(', '));