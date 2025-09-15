// Peça o placar de um jogo e declare o vencedor ou empate.

// Importa a biblioteca 'prompt-sync' para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Verificador de Resultado de Jogo ---");

// Pede ao usuário os gols de cada time e converte as entradas para o tipo Number.
const golsTimeA = Number(prompt("Gols do Time A: "));
const golsTimeB = Number(prompt("Gols do Time B: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que ambos os placares sejam números inteiros e não negativos.
// A condição || (OU) exibe o erro se qualquer uma das entradas for inválida.
if (isNaN(golsTimeA) || isNaN(golsTimeB) || 
    !Number.isInteger(golsTimeA) || !Number.isInteger(golsTimeB) || 
    golsTimeA < 0 || golsTimeB < 0) {
    
    console.log("Erro: Por favor, digite um placar válido (números inteiros e positivos).");

} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar o resultado do jogo.
    let resultado;

    // A cadeia 'if...else if...else' é perfeita para determinar o resultado.
    
    // 1ª Verificação: O Time A marcou mais gols que o Time B?
    if (golsTimeA > golsTimeB) {
        resultado = "Time A venceu!";
    } 
    // 2ª Verificação: Se a primeira condição for falsa, o Time B marcou mais gols que o Time A?
    else if (golsTimeB > golsTimeA) {
        resultado = "Time B venceu!";
    } 
    // 3ª Verificação: Se nenhuma das condições acima for verdadeira, a única possibilidade
    // que resta é que os placares sejam iguais (empate).
    else {
        resultado = "O jogo terminou em empate!";
    }

    // --- SAÍDA FINAL ---
    // Exibe o placar e o resultado final de forma organizada.
    console.log(`\nPlacar: Time A ${golsTimeA} x ${golsTimeB} Time B`);
    console.log(`Resultado: ${resultado}`);
}