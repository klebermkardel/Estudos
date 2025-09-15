// Remover Duplicatas: Crie um array de números com valores duplicados (ex: [1, 2, 2, 3, 4, 4, 5]). Crie um novo array contendo apenas os valores únicos.

// 1. O ARRAY ORIGINAL
// Criamos um array com vários números duplicados para o nosso teste.
const numerosComDuplicatas = [1, 2, 2, 3, 4, 4, 5];

// --- LÓGICA DE FILTRAGEM ---

// Usamos .filter() para criar um novo array com os valores únicos.
const numerosUnicos = numerosComDuplicatas.filter((item, indice, array) => {
    // A função de callback do filter recebe 3 argumentos: o item, o índice e o array completo.
    // Nossa "função de teste" é a seguinte:
    // "O índice da PRIMEIRA ocorrência deste 'item' no array é igual ao seu 'indice' ATUAL?"
    return array.indexOf(item) === indice;
});

// --- SAÍDA FINAL ---
console.log("\n--- Removedor de Duplicatas ---");
console.log(`Array Original:  [${numerosComDuplicatas.join(', ')}]`);
console.log(`Array com valores únicos: [${numerosUnicos.join(', ')}]`);