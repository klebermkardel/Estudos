// Acesso Dinâmico: Crie um objeto carro com as propriedades marca, modelo e ano. Peça ao usuário para digitar o nome de uma propriedade ("marca", "modelo" ou "ano"). Use a notação de colchetes (objeto[chave]) para acessar e imprimir o valor da propriedade que o usuário escolheu.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// 1. CRIAÇÃO DO OBJETO
// Criamos o objeto 'carro' com suas propriedades e valores.
const carro = {
    marca: "Mercedes-Benz",
    modelo: "AMG Classe C Sedan",
    ano: 2024
};

// Exibe um título e as opções válidas para guiar o usuário.
console.log("\n--- Informações do Carro ---");
console.log("Propriedades disponíveis: marca, modelo, ano");

// --- 2. ENTRADA DE DADOS E NORMALIZAÇÃO ---
// Pede ao usuário o nome da propriedade que ele deseja ver.
// Usamos .trim() e .toLowerCase() para limpar e padronizar a entrada,
// tornando a verificação menos propensa a erros de digitação.
const chaveDesejada = prompt("Qual propriedade você gostaria de ver? ").trim().toLowerCase();

// --- 3. VALIDAÇÃO E LÓGICA DE ACESSO ---
// Usamos o operador 'in' para verificar se a chave (propriedade) que o usuário digitou
// existe no objeto 'carro'. Esta é a forma mais segura de fazer essa checagem.
if (chaveDesejada in carro) {
    // Se a chave existe, usamos a notação de colchetes para o acesso dinâmico.
    // O JavaScript usa o valor da variável 'chaveDesejada' (que é uma string)
    // para encontrar a propriedade correspondente no objeto.
    console.log(`\nO valor de "${chaveDesejada}" é: ${carro[chaveDesejada]}`);
} else {
    // Se a chave não for encontrada no objeto, informamos o usuário com uma mensagem de erro clara.
    console.log(`\nErro: A propriedade "${chaveDesejada}" não existe neste objeto.`);
}