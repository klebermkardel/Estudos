// Crie uma função chamada temPropriedade que receba um objeto e uma string (o nome da propriedade) como parâmetros. A função deve retornar true se o objeto tiver a propriedade e false caso contrário.

const prompt = require('prompt-sync')();

// --- 1. DECLARAÇÃO DA FUNÇÃO ---
// A função recebe um objeto qualquer e o nome de uma propriedade (string).
// Sua única responsabilidade é verificar se a propriedade existe no objeto.
const temPropriedade = (obj, propriedade) => {
    // O método .hasOwnProperty() retorna 'true' se 'obj' tiver uma propriedade
    // com o nome exato contido na variável 'propriedade', e 'false' caso contrário.
    return obj.hasOwnProperty(propriedade);
};

// --- 2. CRIAÇÃO DO CENÁRIO DE TESTE ---
// Criamos um objeto de exemplo para testar nossa função.
const pessoa = {
    nome: "Beatriz",
    idade: 28,
    cidade: "Salvador"
};

console.log("\n--- Verificador de Propriedades de Objeto ---");
console.log("O objeto 'pessoa' tem as seguintes propriedades: nome, idade, cidade.");
const propriedadeParaVerificar = prompt("Digite o nome da propriedade que você quer verificar: ");

// --- 3. CHAMADA DA FUNÇÃO E EXIBIÇÃO DO RESULTADO ---

// Chamamos a função com o objeto e a entrada do usuário.
// O resultado será 'true' ou 'false'.
const resultado = temPropriedade(pessoa, propriedadeParaVerificar);

// Usamos um 'if' para dar uma resposta amigável ao usuário.
if (resultado) {
    console.log(`\nSim, o objeto possui a propriedade "${propriedadeParaVerificar}".`);
} else {
    console.log(`\nNão, o objeto NÃO possui a propriedade "${propriedadeParaVerificar}".`);
}