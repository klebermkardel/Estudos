/*

Localizador de Palavras-Chave

Dado o array de requisitos de uma vaga: const requisitos = ["Node.js", "React", "JavaScript Avançado", "C++"]. Use o .filter() e o .includes() para gerar um novo array contendo apenas os requisitos que tenham a palavra "JavaScript".

*/

// Inicializa a lista de exigências técnicas de uma vaga
const requisitos = ["Node.js", "React", "JavaScript Avançado", "C++"];

// FILTER: Varre o array e usa o .includes() para checar se a palavra "JavaScript" 
// está contida em algum lugar da string analisada, gerando uma nova lista com os acertos
const filtroDeRequisitos = requisitos.filter(requisito => requisito.includes("JavaScript"));

// Exibe os requisitos filtrados no terminal
console.log(filtroDeRequisitos);