// Classifique uma senha como "Forte", "Média" ou "Fraca" com base em múltiplos critérios.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();
// Exibe um título para o programa.
console.log("\n--- Verificador de Força da Senha ---");

// Pede ao usuário que digite a senha.
const senha = prompt("Digite uma senha: ");

// --- INICIALIZAÇÃO DAS VARIÁVEIS DE CONTROLE ---
let forca = 0; // Variável para "pontuar" a senha. Começa em 0.
let classificacao; // Armazenará o resultado final ("Forte", "Média", "Fraca").
let feedback = ""; // String que acumulará as dicas de melhoria.

// --- VALIDAÇÃO INICIAL ---
// Verifica se a senha não foi deixada em branco.
if (!senha) {
    classificacao = "Inválida (vazia)";
} else {
    // --- LÓGICA DE PONTUAÇÃO ---
    // O programa verifica 5 critérios diferentes. Se a senha cumpre um critério,
    // a 'forca' aumenta. Se não, uma mensagem é adicionada ao 'feedback'.

    // Critério 1: Comprimento
    if (senha.length >= 8) {
        forca += 1;
    } else {
        feedback = "ter no mínimo 8 caracteres"; // Primeira dica
    }
    
    // Critério 2: Letra maiúscula (Regex /[A-Z]/)
    if (/[A-Z]/.test(senha)) {
        forca += 1;
    } else {
        // Se a string de feedback já tiver algo, adiciona uma vírgula antes da nova dica.
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter uma letra maiúscula";
    }
    
    // Critério 3: Letra minúscula (Regex /[a-z]/)
    if (/[a-z]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter uma letra minúscula";
    }
    
    // Critério 4: Número (Regex /[0-9]/)
    if (/[0-9]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter um número";
    }
    
    // Critério 5: Caractere Especial (Regex /[^a-zA-Z0-9]/)
    // Este padrão significa "qualquer caractere que NÃO seja letra ou número".
    if (/[^a-zA-Z0-9]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter um caractere especial (ex: !@#$%)";
    }

    // --- CLASSIFICAÇÃO FINAL ---
    // A cadeia 'if...else if...else' classifica a senha com base na pontuação final 'forca'.
    if (forca === 5) { // Cumpriu todos os 5 critérios
        classificacao = "Forte 💪";
    } else if (forca >= 3) { // Cumpriu 3 ou 4 critérios
        classificacao = "Média 👍";
    } else { // Cumpriu 0, 1 ou 2 critérios
        classificacao = "Fraca 👎";
    }
}

// --- SAÍDA FINAL ---
// Exibe a classificação da senha.
console.log(`\nA força da sua senha é: ${classificacao}`);

// Se a string de feedback não estiver vazia (ou seja, se algum critério falhou),
// o programa exibe as dicas de como melhorar a senha.
if (feedback !== "") {
    console.log(`Para melhorar: a senha precisa ${feedback}.`);
}