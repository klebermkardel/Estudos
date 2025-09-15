/* Adivinhe o Número: Crie um "mini-game". Gere um número aleatório entre 1 e 100.
Peça ao usuário para adivinhar o número. Use um laço while para continuar pedindo um palpite
até que o usuário acerte. A cada tentativa errada, diga se o número correto é maior ou menor que o palpite.
*/

// Importa a biblioteca para a entrada de dados.
const prompt = require('prompt-sync')();

// Gera um número inteiro aleatório entre 1 e 100, usando a dica do enunciado.
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// A variável 'palpite' não é inicializada para que o laço while comece.
let palpite;
let tentativas = 0; // A variável que irá contar as tentativas, começando em 0.

console.log("\n--- Jogo: Adivinhe o Número Secreto (1 a 100) ---");

// O laço 'while' continua ENQUANTO o palpite for diferente do número secreto.
while (palpite !== numeroSecreto) {
    // Pede o palpite a cada nova rodada do laço.
    palpite = Number(prompt("Qual é o seu palpite? "));
    tentativas++; // Incrementa o contador de tentativas a cada palpite.

    // --- BLOCO DE VALIDAÇÃO ---
    // A condição 'if' verifica se o palpite é inválido:
    // 1. isNaN(palpite): A entrada não é um número.
    // 2. !Number.isInteger(palpite): O número tem casas decimais.
    // 3. palpite < 1 || palpite > 100: O número está fora do intervalo [1, 100].
    if (isNaN(palpite) || !Number.isInteger(palpite) || palpite < 1 || palpite > 100) {
        console.log("Erro: Por favor, digite um número inteiro válido entre 1 e 100: ");
        // O continue aqui faria com que o código pulasse o resto da iteração,
        // mas como não há mais nada abaixo, ele apenas força o laço a voltar para o topo.
    } else {
        // --- LÓGICA DO JOGO ---
        // Este bloco só é executado se o palpite for válido.
        if (palpite < numeroSecreto) {
            console.log("O número secreto é MAIOR. Tente novamente!");
        } else if (palpite > numeroSecreto) {
            console.log("O número secreto é MENOR. Tente novamente!");
        }
        // Se o palpite for igual, nenhuma das condições acima será verdadeira.
        // O laço simplesmente terminará, e a mensagem de sucesso será exibida depois.
    }
}

// --- SAÍDA FINAL ---
// Este código só é alcançado quando a condição do laço 'while' se torna falsa (palpite === numeroSecreto).
console.log(`\nParabéns, você acertou! O número secreto era ${numeroSecreto}`);
console.log(`Você precisou de ${tentativas} tentativa(s).`);