// Peça três números e os imprima em ordem crescente.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Ordenador de Números ---");

// Pede ao usuário que digite três números e os converte para o tipo Number.
const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
const n3 = Number(prompt("Digite o terceiro número: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que todas as três entradas sejam números válidos.
if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    console.log("Erro: Por favor, digite apenas números.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar a string com os números já ordenados.
    let ordem;

    // A cadeia 'if...else if...else' é usada para testar todas as 6 combinações
    // de ordem possíveis para três números.
    // O uso de '<=' (menor ou igual) é importante para que a lógica funcione
    // corretamente caso haja números repetidos (ex: 5, 10, 5).

    // 1ª Verificação: n1 é o menor, seguido por n2 e n3.
    if (n1 <= n2 && n2 <= n3) {
        ordem = `${n1}, ${n2}, ${n3}`;
    } 
    // 2ª Verificação: n1 é o menor, seguido por n3 e n2.
    else if (n1 <= n3 && n3 <= n2) {
        ordem = `${n1}, ${n3}, ${n2}`;
    } 
    // 3ª Verificação: n2 é o menor, seguido por n1 e n3.
    else if (n2 <= n1 && n1 <= n3) {
        ordem = `${n2}, ${n1}, ${n3}`;
    } 
    // 4ª Verificação: n2 é o menor, seguido por n3 e n1.
    else if (n2 <= n3 && n3 <= n1) {
        ordem = `${n2}, ${n3}, ${n1}`;
    } 
    // 5ª Verificação: n3 é o menor, seguido por n1 e n2.
    else if (n3 <= n1 && n1 <= n2) {
        ordem = `${n3}, ${n1}, ${n2}`;
    } 
    // 'else' final: Se nenhuma das 5 condições acima for verdadeira,
    // por eliminação, a única ordem restante é n3, n2, n1.
    else {
        ordem = `${n3}, ${n2}, ${n1}`;
    }

    // --- SAÍDA FINAL ---
    // Exibe a string 'ordem' que foi definida em um dos blocos condicionais.
    console.log(`\nOs números em ordem crescente são: ${ordem}`);
}