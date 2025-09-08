// Peça uma nota de 0 a 10 e atribua um conceito: A (9-10), B (7-8.9), C (5-6.9), D (3-4.9), F (0-2.9).

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Conversor de Notas para Conceito ---");

// Pede ao usuário que digite a nota e a converte para o tipo Number.
// O uso de Number() é apropriado aqui, pois notas podem ser decimais (ex: 8.5).
const nota = Number(prompt("Digite a nota (0 a 10): "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que a entrada seja um número e que esteja dentro do intervalo permitido (0 a 10).
if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Erro: Por favor, informe uma nota válida entre 0 e 10.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar o conceito correspondente.
    let conceito;

    // A cadeia 'if...else if...else' verifica as faixas de nota em ordem, da maior para a menor.
    // Esta é uma maneira muito eficiente de escrever a lógica.

    // 1ª Verificação: A nota é para o conceito 'A'?
    if (nota >= 9) {
        conceito = "A";
    } 
    // 2ª Verificação: Se não for 'A', ela é para o conceito 'B'?
    // Este bloco só é executado se 'nota >= 9' for falso, então já sabemos que a nota é < 9.
    else if (nota >= 7) {
        conceito = "B";
    } 
    // 3ª Verificação: Se não for 'A' nem 'B', checamos para 'C'.
    // Se o código chegou aqui, já sabemos que a nota é < 7.
    else if (nota >= 5) {
        conceito = "C";
    } 
    // 4ª Verificação: Se não for 'A', 'B' ou 'C', checamos para 'D'.
    // Já sabemos que a nota é < 5.
    else if (nota >= 3) {
        conceito = "D";
    } 
    // O 'else' final captura todas as notas restantes (abaixo de 3).
    else {
        conceito = "F";
    }

    // --- SAÍDA FINAL ---
    // Exibe a nota original e o conceito que foi determinado pela lógica acima.
    console.log(`O conceito correspondente à nota ${nota} é: ${conceito}.`);
}