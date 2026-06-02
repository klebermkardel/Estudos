/*

Filtro de Vagas por Salário: Dado o seguinte array de objetos:

const vagas = [
    { cargo: "Dev Jr", salario: 4000 },
    { cargo: "Dev Jr", salario: 5500 },
    { cargo: "Estagiário", salario: 2000 }
];

Use o .filter() para criar uma nova lista contendo apenas as vagas de "Dev Jr" que pagam mais que 4500.

*/

// Array de objetos simulando o retorno de um banco de dados de vagas
const vagas = [
    { cargo: "Dev Jr", salario: 4000 },
    { cargo: "Dev Jr", salario: 5500 },
    { cargo: "Estagiário", salario: 2000 }
];

// FILTER: Varre a lista avaliando as propriedades internas de cada objeto.
// Deixa passar apenas se o cargo for exatamente "Dev Jr" E o salario for acima de 4500.
const vagasFiltradas = vagas.filter(vaga => vaga.cargo === "Dev Jr" && vaga.salario > 4500);

// Exibe o array contendo os objetos filtrados no console
console.log(vagasFiltradas);