// Sugira um plano de telefonia com base no consumo de dados.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Sugestão de Plano de Telefonia ---");

// Pede ao usuário que digite o consumo de dados em gigabytes e o converte para o tipo Number.
const consumo = Number(prompt("Digite seu consumo de dados em GB: "));

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o consumo seja um número válido e não negativo.
if (isNaN(consumo) || consumo < 0) {
    console.log("Erro: Por favor, digite um valor de consumo válido.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Declara a variável que irá armazenar o nome do plano sugerido.
    let planoSugerido;

    // A cadeia 'if...else if...else' é a estrutura ideal para este tipo de problema,
    // pois as faixas de consumo são excludentes e verificadas em ordem.

    // 1ª Verificação: A faixa mais baixa.
    if (consumo <= 10) {
        planoSugerido = "Plano Básico (10GB)";
    } 
    // 2ª Verificação: Este bloco só é executado se o consumo for maior que 10.
    // Portanto, basta checar o limite superior da faixa.
    else if (consumo <= 20) {
        planoSugerido = "Plano Intermediário (20GB)";
    } 
    // 3ª Verificação: Se o código chegou aqui, o consumo é maior que 20.
    // O 'else' final captura a faixa superior (Plano Premium).
    else {
        planoSugerido = "Plano Premium (Ilimitado)";
    }

    // --- SAÍDA FINAL ---
    // Exibe o resultado final de forma clara e amigável para o usuário.
    console.log(`Com um consumo de ${consumo}GB, o plano sugerido é: ${planoSugerido}.`);
}