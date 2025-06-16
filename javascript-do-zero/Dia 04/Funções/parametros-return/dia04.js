/*

Crie uma função chamada boasVindas(nome)

Recebe um nome como parâmetro

Retorna a frase: "Bem-vindo(a), [nome]!"

*/

// Função que recebe um nome e retorna uma mensagem de boas-vindas
function boasVindas(nome) {
    return `Bem-vindo(a), ${nome}!`
}

// Chamando a função boasVindas e exibindo o resultado no console
const mensagem = boasVindas("Kleber")
console.log(mensagem) // Saída: Bem-vindo(a), Kleber!


/*

Crie uma função calcularDobro(numero)

Recebe um número como parâmetro

Retorna o dobro desse número

*/

// Função que recebe um número e retorna o dobro dele
function calcularDobro(numero) {
    return numero * 2
}

// Chamando a função calcularDobro e exibindo o resultado no console
const dobroDeCinco = calcularDobro(5);
console.log(dobroDeCinco); // Saída: 10

// Você pode testar com outros valores também:
console.log(boasVindas("Ana"));       // Saída: Bem-vindo(a), Ana!
console.log(calcularDobro(12));       // Saída: 24

// Função simples sem parâmetros
// Quando chamada, exibe uma saudação no console
function saudacao() {
    console.log("Bom dia, Kleber! Vamos estudar JavaScript!");
}

// Chamando (executando) a função saudacao
saudacao();

// Função com múltiplos parâmetros + return
function apresentarPessoa(nome, idade, cidade) {
    return `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
}

console.log(apresentarPessoa("Kleber", 29, "São Paulo"));

// Função com validação simples dentro
function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Erro: divisão por zero!