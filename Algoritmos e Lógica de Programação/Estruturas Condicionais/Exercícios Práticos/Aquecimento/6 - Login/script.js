// Login Simples: Crie variáveis com um nome de usuário e senha. Peça ao usuário para digitá-los e verifique se correspondem aos valores armazenados.

const prompt = require('prompt-sync')();

console.log("");

const USUARIO_CORRETO = "admin";
const SENHA_CORRETA = "Senha@123";

console.log("--- TELA DE LOGIN ---");
const entradaUsuario = prompt("Usuário: ");
const entradaSenha = prompt("Senha: ");

if(!entradaUsuario.trim() || !entradaSenha) {
    console.log("Erro: Usuário e Senha são obrigatórios.");
} else {
    const usuarioNormalizado = entradaUsuario.trim().toLowerCase();

    if (usuarioNormalizado === USUARIO_CORRETO && entradaSenha === SENHA_CORRETA) {
        console.log("✅ Acesso concedido! Bem-vindo!");
    } else {
        console.log("❌ Acesso negado. Usuário e/ou senha inválidos.");
    }
}