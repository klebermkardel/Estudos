/*

Desafio: Cadastro de Pessoas e Relatório Inteligente

1. Você deve criar um programa que:

2. Peça ao usuário quantas pessoas ele quer cadastrar.

3. Para cada pessoa, peça o nome e a idade (use prompt()).

4. Armazene essas pessoas como objetos dentro de um array.

Depois, exiba um relatório no console com as seguintes informações:

Saída esperada:

- Lista de todos os nomes.

- Lista dos maiores de idade (18+).

- Nome da primeira pessoa com menos de 18 anos (se houver).

- Um novo array com os nomes em letras maiúsculas.

*/

// Função para cadastrar uma nova pessoa
function cadastrarPessoa(numero) {
    // Solicita o nome da pessoa com base na ordem
    const nomePessoa = prompt(`Qual o nome da ${numero}º pessoa que você deseja cadastrar?`);

    // Solicita a idade da pessoa e converte para número
    const idade = parseInt(prompt(`Qual a idade de ${nomePessoa}?`));

    // Retorna um objeto representando essa pessoa
    return {
        nomePessoa: nomePessoa,
        idade: idade
    };
}

// Função que gera o relatório com base nos dados cadastrados
function gerarRelatorio(pessoas) {
    // Cria um array com todos os nomes das pessoas
    let nomes = pessoas.map(p => p.nomePessoa);

    // Filtra somente as pessoas com 18 anos ou mais
    let maioresDeIdade = pessoas.filter(p => p.idade >= 18);

    // Encontra a primeira pessoa com menos de 18 anos
    let primeiraMenorDeIdade = pessoas.find(p => p.idade < 18);

    // Cria um novo array com todos os nomes em letras maiúsculas
    let nomesMaiusculos = nomes.map(n => n.toUpperCase());

    // Começa a montar o texto do relatório
    let relatorio = `=== RELATÓRIO ===\n`;

    // Adiciona todos os nomes
    relatorio += `\nTodos os nomes: ${nomes.join(', ')}`;

    // Adiciona os maiores de idade
    relatorio += `\n\nMaiores de idade:\n`;
    if (maioresDeIdade.length > 0) {
        // Se houver, lista com nome e idade
        relatorio += maioresDeIdade.map(p => `${p.nomePessoa} (${p.idade})`).join(', ');
    } else {
        // Se não houver nenhum
        relatorio += "Nenhuma pessoa maior de idade cadastrada.";
    }

    // Adiciona a primeira pessoa menor de idade
    relatorio += `\n\nPrimeira pessoa com menos de 18 anos:\n`;
    if (primeiraMenorDeIdade) {
        relatorio += `${primeiraMenorDeIdade.nomePessoa} (${primeiraMenorDeIdade.idade})`;
    } else {
        relatorio += "Nenhuma pessoa menor de idade.";
    }

    // Adiciona os nomes em maiúsculas
    relatorio += `\n\nNomes em letras maiúsculas:\n${nomesMaiusculos.join(', ')}`;

    // Retorna o texto completo
    return relatorio;
}

// ===== Início do programa principal =====

// Solicita ao usuário quantas pessoas ele quer cadastrar
const qtdPessoas = parseInt(prompt(`Quantas pessoas você deseja cadastrar?`));

// Cria um array vazio que será preenchido com os dados
let pessoas = [];

// Loop para cadastrar cada pessoa com base na quantidade informada
for (let i = 1; i <= qtdPessoas; i++) {
    pessoas.push(cadastrarPessoa(i));
}

// Gera o relatório com os dados cadastrados
const resultado = gerarRelatorio(pessoas);

// Mostra o relatório final usando um alerta
alert(resultado);
