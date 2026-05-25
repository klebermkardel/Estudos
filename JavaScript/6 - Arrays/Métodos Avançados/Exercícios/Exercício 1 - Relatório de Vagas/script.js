/*

Exercício 1: Relatório de Vagas (Arrow Function + .forEach())

Contexto: Você tem uma lista de empresas parceiras e quer apenas exibir uma mensagem no console para cada uma delas no formato moderno.

O Desafio:

1. Crie o array const empresas = ["Google", "Microsoft", "Meta"].

2. Use o método .forEach() junto com uma Arrow Function de linha única (retorno implícito) para exibir no console a frase: "Empresa parceira: [Nome da Empresa]".

*/

// Inicializa uma lista contendo os nomes das organizações parceiras
const empresas = ["Google", "Amazon", "Netflix", "MercadoLivre", "IFood", "Uber", "Microsoft", "Apple"];

// Executa o método .forEach() que percorre o array, isolando cada elemento no parâmetro 'empresa'
// e disparando uma Arrow Function de linha única para exibir a string formatada no terminal
empresas.forEach(empresa => console.log("Empresa parceira: " + empresa));