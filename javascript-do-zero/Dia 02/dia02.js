/* 
  Dia 02 - Controle de Fluxo e Entrada de Dados
  Autor: Kleber
  Data: 2025-06-10
*/

// -------------------------------------------
// 🔹 Declaração de variáveis com let e const
// -------------------------------------------

// const: valor fixo, não pode ser alterado depois
const nome = "Kleber";

// let: valor pode ser alterado durante o código
let idade = 29;
idade = 30; // Exemplo de reatribuição

console.log("Nome:", nome);
console.log("Idade:", idade);

// -------------------------------------------
// 🔹 Simulação de entrada de dados (fixo por enquanto)
// -------------------------------------------

// Simulando como se o usuário tivesse digitado
const usuario = "Joana";
const idadeUsuario = 17;

console.log(`Olá, ${usuario}. Você tem ${idadeUsuario} anos.`);

// -------------------------------------------
// 🔹 Estruturas de decisão: if / else if / else
// -------------------------------------------

if (idadeUsuario >= 18) {
  console.log("Você é maior de idade.");
} else if (idadeUsuario === 17) {
  console.log("Você está quase lá!");
} else {
  console.log("Você é menor de idade.");
}

// Outros exemplos:
const nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// -------------------------------------------
// 🔹 Operadores lógicos: && (E), || (OU), ! (NÃO)
// -------------------------------------------

const temDocumento = true;
const temConvite = false;

// Ambos precisam ser verdadeiros
if (idadeUsuario >= 18 && temDocumento) {
  console.log("Entrada permitida (idade e documento OK)");
}

// Basta uma das condições ser verdadeira
if (idadeUsuario >= 18 || temConvite) {
  console.log("Entrada permitida com convite ou idade");
}

// Negação (!)
const entradaLiberada = false;

if (!entradaLiberada) {
  console.log("A entrada ainda está bloqueada.");
}

// -------------------------------------------
// 🔹 Mini Projeto: Verificador de Idade
// -------------------------------------------

const nomePessoa = "Carlos";
const idadePessoa = 16;

if (idadePessoa >= 18) {
  console.log(`Olá, ${nomePessoa}! Entrada autorizada.`);
} else if (idadePessoa >= 16) {
  console.log(`Olá, ${nomePessoa}! Entrada apenas com responsável.`);
} else {
  console.log(`Olá, ${nomePessoa}! Entrada negada.`);
}
