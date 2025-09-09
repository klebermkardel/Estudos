// Remover do Final: Crie um array com 4 notas de provas. Use o método .pop() para remover a última nota. Imprima no console a nota que foi removida e também o array de notas atualizado.

const notasDaProva = [5.7, 7.5, 7.8, 9.0];

const notaRemovida = notasDaProva.pop();

console.log("\n--- Notas da Prova: \n");
console.log(`Nota removida: ${notaRemovida.toLocaleString('pt-BR')}`);
console.log(`Notas finais: ${notasDaProva.join(', ')}`);