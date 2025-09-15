// Procurar um Nome: Crie um array de nomes. Peça ao usuário para digitar um nome.
// Use o método .includes() para verificar se o nome digitado existe no array.

// Importa a biblioteca para a entrada de dados.
const prompt = require('prompt-sync')();

// 1. CRIAÇÃO DO ARRAY
// O array de nomes a ser pesquisado.
const nomes = ["Kleber", "Camila", "Nicolas", "Tel", "Eduarda"];

// 2. ENTRADA DO USUÁRIO
// Pede ao usuário o nome a ser pesquisado e remove espaços extras.
const nomeDigitado = prompt("Pesquise um nome: ");
const nomeLimpo = nomeDigitado.trim();

// --- LÓGICA PRINCIPAL (COM .includes() E TERNÁRIO) ---

// a. nomes.includes(nomeLimpo): O método .includes() verifica se o array 'nomes'
//    contém um elemento que seja EXATAMENTE igual à string 'nomeLimpo'.
//    Ele retorna 'true' se encontrar, ou 'false' se não encontrar. (É case-sensitive)
//
// b. ? "encontrado" : "não encontrado": Este é o operador ternário que escolhe a
//    mensagem com base no resultado booleano do .includes().
const retorno = nomes.includes(nomeLimpo) ? "foi encontrado" : "não foi encontrado";

// 4. SAÍDA FINAL
// Imprime a mensagem que foi definida na linha anterior.
console.log(`O nome "${nomeLimpo}" ${retorno} na lista.`);