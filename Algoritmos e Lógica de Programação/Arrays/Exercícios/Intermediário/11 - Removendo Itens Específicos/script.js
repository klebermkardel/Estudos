// Remover um Elemento Específico: Crie um array de frutas. Use o método .indexOf() para
// encontrar a posição de um elemento e então use .splice() para removê-lo.

// Importa a biblioteca para a entrada de dados.
const prompt = require('prompt-sync')();

// 1. CRIAÇÃO DO ARRAY
const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Pera"];

console.log("\n--- Removedor de Itens da Lista ---");
console.log(`Lista original: ${frutas.join(', ')}`);

// 2. ENTRADA DO USUÁRIO
const frutaParaRemover = prompt("Qual fruta você deseja remover? ");

// --- LÓGICA DE REMOÇÃO ---

// 3. ENCONTRAR O ÍNDICE
// .indexOf() procura pela string exata e retorna seu índice.
// Se não encontrar o item, ele retorna -1.
const indice = frutas.indexOf(frutaParaRemover);

// 4. VERIFICAR E AGIR
// Verificamos se a fruta foi realmente encontrada. Esta checagem é crucial!
if (indice !== -1) {
    // Se o índice for diferente de -1, o item existe na lista.
    
    // 5. REMOVER COM .splice()
    // frutas.splice(indice, 1) significa: a partir do 'indice' encontrado, remova '1' elemento.
    // Este método MODIFICA o array original.
    frutas.splice(indice, 1);

    console.log(`\n"${frutaParaRemover}" foi removido com sucesso.`);
    console.log(`Lista atualizada: ${frutas.join(', ')}`);
} else {
    // Se o índice for -1, o item não foi encontrado.
    console.log(`\nA fruta "${frutaParaRemover}" não foi encontrada na lista.`);
}
