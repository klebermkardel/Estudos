// Validação de Entrada: Peça ao usuário para digitar uma senha. Continue pedindo
// a senha com um laço while até que ele digite a senha correta ("1234").

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Declara a variável 'senha' com 'let', pois seu valor precisará ser
// atualizado dentro do laço.
let senha;

// --- LEITURA DE PREPARAÇÃO (PRIMING READ) ---
// Pedimos a senha uma primeira vez ANTES de o laço começar.
// Isso "prepara" a variável 'senha' para ser testada na condição do 'while'.
senha = prompt("Digite a senha: ");

// --- LAÇO WHILE ---
// O laço continuará executando ENQUANTO o valor da variável 'senha'
// for diferente (!==) da senha correta "1234".
while (senha !== "1234") {
    // Se a senha estiver incorreta, uma mensagem de erro é exibida.
    console.log("Senha incorreta!");
    
    // É crucial pedir a senha novamente DENTRO do laço.
    // Esta linha atualiza a variável 'senha' para que a condição do 'while'
    // possa ser testada novamente com o novo valor na próxima iteração.
    // Se esta linha não existisse, teríamos um loop infinito.
    senha = prompt("Digite novamente: ");
}

// --- SAÍDA FINAL ---
// Este código só é alcançado quando a condição do 'while' se torna falsa,
// ou seja, quando o usuário finalmente digita "1234".
console.log("Parabéns! Senha correta.");