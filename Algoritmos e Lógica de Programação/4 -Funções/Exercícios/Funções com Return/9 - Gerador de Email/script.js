// Criador de E-mail: Crie uma função chamada criarEmail que receba um nomeCompleto como parâmetro. A função deve gerar um e-mail no formato nome_completo@meudominio.com (tudo em minúsculo e substituindo espaços por _) e retornar esse e-mail.

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// --- 1. DECLARAÇÃO DA FUNÇÃO ---
// A função 'criarEmail' recebe 'nomeCompleto' como parâmetro.
const criarEmail = (nomeCompleto) => {
    // A lógica de formatação acontece em cadeia:
    // 1. .toLowerCase(): Converte todo o nome para minúsculas.
    // 2. .replace(/ /g, '_'): Substitui TODOS os espaços por underscores.
    // 3. + "@meudominio.com": Concatena o domínio do e-mail ao final.
    const emailGerado = nomeCompleto.toLowerCase().replace(/ /g, '_') + "@meudominio.com";
    
    // A função retorna a string de e-mail finalizada.
    return emailGerado;
};

// --- 2. ENTRADA E TRATAMENTO DE DADOS ---
const nomeDigitado = prompt("Digite o seu nome completo: ");
// Limpamos a entrada do usuário removendo espaços extras do início e do fim.
const nomeLimpo = nomeDigitado.trim();

// --- 3. VALIDAÇÃO ---
// A verificação é feita na variável 'nomeLimpo'.
// Se, após o .trim(), a string estiver vazia (""), a condição !nomeLimpo será verdadeira.
if (!nomeLimpo) {
    console.log("Erro: Por favor, digite o seu nome completo.");
} else {
    // --- 4. CHAMADA DA FUNÇÃO E SAÍDA ---
    // Chamamos a função 'criarEmail' e passamos o nome já limpo.
    // O valor retornado pela função é usado diretamente na string de saída.
    console.log(`\nE-mail gerado: ${criarEmail(nomeLimpo)}`);
}