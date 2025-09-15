// Comparação de Nomes: Peça dois nomes e verifique se eles são iguais.

// Importa a biblioteca 'prompt-sync' para permitir a entrada de dados pelo usuário.
const prompt = require('prompt-sync')();

// Exibe um título para o programa. O '\n' cria uma linha em branco antes do texto.
console.log("\n--- Comparador de Nomes ---");

// Pede ao usuário para digitar o primeiro e o segundo nome.
// Os valores são armazenados como strings (texto).
const nome1 = prompt("Digite o primeiro nome: ");
const nome2 = prompt("Digite o segundo nome: ");

// --- BLOCO DE VALIDAÇÃO ---
// Esta condição verifica se algum dos nomes está vazio ou contém apenas espaços.
// 1. nome1.trim(): Remove os espaços em branco do início e do fim do primeiro nome.
// 2. ! (NÃO): Se o resultado de .trim() for uma string vazia (""), ela é considerada 'falsy'.
//    O '!' inverte isso para 'true', ativando o 'if'.
// A condição || (OU) garante que o erro seja exibido se o primeiro OU o segundo nome forem vazios.
if (!nome1.trim() || !nome2.trim()) {
    console.log("Erro: Ambos os nomes devem ser preenchidos.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se ambos os campos tiverem sido preenchidos.

    // "Normalizamos" os nomes para garantir uma comparação justa e não sensível a maiúsculas/minúsculas.
    // .trim() remove espaços extras.
    // .toLowerCase() converte todo o texto para letras minúsculas.
    // Ex: "  Ana " se torna "ana".
    const nome1Normalizado = nome1.trim().toLowerCase();
    const nome2Normalizado = nome2.trim().toLowerCase();

    // Comparamos as versões normalizadas dos nomes.
    // A comparação '===' (estritamente igual) verifica se os textos são idênticos.
    if (nome1Normalizado === nome2Normalizado) {
        // Se forem iguais, exibe uma mensagem de sucesso.
        // Note que usamos as variáveis originais (nome1, nome2) na mensagem para mostrar ao usuário
        // exatamente o que ele digitou.
        console.log(`Os nomes "${nome1}" e "${nome2}" são IGUAIS.`);
    } else {
        // Se não forem iguais, exibe a mensagem correspondente.
        console.log(`Os nomes "${nome1}" e "${nome2}" são DIFERENTES.`);
    }
}