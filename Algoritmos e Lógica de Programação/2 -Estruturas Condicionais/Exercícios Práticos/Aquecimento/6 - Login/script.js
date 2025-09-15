// Login Simples: Crie variáveis com um nome de usuário e senha.
// Peça ao usuário para digitá-los e verifique se correspondem aos valores armazenados.

// Importa a biblioteca 'prompt-sync'.
const prompt = require('prompt-sync')();

// Imprime uma linha em branco para formatação.
console.log("");

// --- CONFIGURAÇÃO DE CREDENCIAIS ---
// Definimos o usuário e senha corretos como constantes.
// Usamos letras maiúsculas por convenção para indicar que estes valores não devem ser alterados.
const USUARIO_CORRETO = "admin";
const SENHA_CORRETA = "Senha@123";

// --- ENTRADA DE DADOS DO USUÁRIO ---
console.log("--- TELA DE LOGIN ---");
const entradaUsuario = prompt("Usuário: ");
const entradaSenha = prompt("Senha: ");

// --- BLOCO DE VALIDAÇÃO INICIAL ---
// A primeira verificação é se os campos não foram deixados em branco.
// 1. '!entradaUsuario.trim()': Remove os espaços do usuário e verifica se a string resultante é vazia.
// 2. '!entradaSenha': Verifica se o campo de senha não foi deixado em branco.
// Usamos o operador '||' (OU) pois se QUALQUER um dos dois campos estiver vazio, a entrada é inválida.
if (!entradaUsuario.trim() || !entradaSenha) {
    console.log("Erro: Usuário e Senha são obrigatórios.");
} else {
    // --- BLOCO DE LÓGICA DE AUTENTICAÇÃO ---
    // Este código só é executado se os campos não estiverem vazios.

    // Normalizamos o nome de usuário para uma comparação justa.
    // '.trim()': Remove espaços extras no início e no fim.
    // '.toLowerCase()': Converte para minúsculo, pois nomes de usuário geralmente não diferenciam maiúsculas/minúsculas.
    const usuarioNormalizado = entradaUsuario.trim().toLowerCase();

    // Comparamos as credenciais. A condição só será verdadeira se AMBAS (&&) forem:
    // 1. O usuário normalizado for EXATAMENTE igual ao usuário correto.
    // 2. A senha digitada for EXATAMENTE igual à senha correta (a senha é case-sensitive).
    if (usuarioNormalizado === USUARIO_CORRETO && entradaSenha === SENHA_CORRETA) {
        console.log("✅ Acesso concedido! Bem-vindo!");
    } else {
        // Se a condição acima for falsa, significa que ou o usuário, ou a senha, ou ambos estão errados.
        // Damos uma mensagem genérica para segurança (para não revelar se o usuário existe ou não).
        console.log("❌ Acesso negado. Usuário e/ou senha inválidos.");
    }
}