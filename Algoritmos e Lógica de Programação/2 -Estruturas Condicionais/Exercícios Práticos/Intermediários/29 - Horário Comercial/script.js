// Verifique se uma determinada hora está dentro do horário comercial (8 às 18).

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título claro, informando ao usuário o intervalo que será verificado.
console.log("\n--- Verificador de Horário Comercial (8h-18h) ---");

// Pede ao usuário que digite a hora e a converte para o tipo Number.
const hora = Number(prompt("Digite a hora (0-23): "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta é uma validação completa para garantir que a hora seja um inteiro válido no formato 24h.
// A condição || (OU) exibe o erro se:
// 1. isNaN(hora): A entrada não for um número.
// 2. !Number.isInteger(hora): A entrada for um número decimal.
// 3. hora < 0 || hora > 23: A entrada estiver fora do intervalo de horas válidas (0 a 23).
if (isNaN(hora) || !Number.isInteger(hora) || hora < 0 || hora > 23) {
    console.log("Erro: Por favor, digite uma hora válida (número inteiro de 0 a 23).");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se a hora for um número inteiro válido entre 0 e 23.

    // A condição verifica se a hora atende a dois critérios simultaneamente usando '&&' (E):
    // 1. hora >= 8: A hora deve ser 8 ou mais tarde.
    // 2. hora < 18: A hora deve ser anterior às 18h.
    // Isso define o intervalo como [8, 18), ou seja, de 8:00:00 até 17:59:59.
    if (hora >= 8 && hora < 18) {
        // Se ambas as condições forem verdadeiras.
        console.log(`A hora ${hora}h ESTÁ dentro do horário comercial.`);
    } else {
        // Se pelo menos uma das condições for falsa.
        console.log(`A hora ${hora}h NÃO ESTÁ dentro do horário comercial.`);
    }
}