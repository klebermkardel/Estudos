// Gerar Número da Sorte: Crie uma função chamada gerarNumeroDaSorte que gere e imprima um número aleatório entre 1 e 50.

// --- DECLARAÇÃO DA FUNÇÃO CORRETA ---
// O código que realiza a tarefa de "gerar um número" está DENTRO do corpo da função.
const gerarNumeroDaSorte = () => {
    // Agora, a cada chamada da função, esta linha é executada novamente.
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    console.log(`Seu número da sorte é: ${numeroAleatorio}`);
};

// --- CHAMADA DA FUNÇÃO ---
// Agora, cada chamada da função gera um novo número.
console.log("Gerando o primeiro número...");
gerarNumeroDaSorte();

console.log("Gerando um segundo número...");
gerarNumeroDaSorte();