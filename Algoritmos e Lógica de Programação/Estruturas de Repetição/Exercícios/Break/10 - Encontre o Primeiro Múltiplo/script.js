// Peça ao usuário para digitar um número (numeroAlvo). Use um laço for para
// encontrar e imprimir o primeiro múltiplo desse número e parar o laço.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Pede ao usuário o número-alvo e o converte para o tipo Number.
const numeroAlvo = Number(prompt("Digite um número alvo: "));

// Informa ao usuário qual ação o programa está realizando.
console.log(`\nProcurando o primeiro múltiplo de ${numeroAlvo} entre 1 e 1000...`);

// Definir os limites do laço em constantes torna o código mais legível e fácil de manter.
const inicioContagem = 1;
const fimContagem = 1000;

// --- BLOCO DE VALIDAÇÃO ---
// Garante que o número alvo seja um inteiro positivo válido.
if (isNaN(numeroAlvo) || !Number.isInteger(numeroAlvo) || numeroAlvo <= 0) {
    console.log("Erro: Por favor, informe um número inteiro e positivo válido.");
} else {
    // --- LÓGICA PRINCIPAL ---

    // 1. A "Flag": Criamos uma variável para "lembrar" se encontramos um múltiplo.
    //    Ela começa como 'false' e só mudará para 'true' se a condição for atendida.
    let multiploEncontrado = false;

    // O laço 'for' percorre todos os números no intervalo definido.
    for (let i = inicioContagem; i <= fimContagem; i++) {
        // A condição verifica se 'i' é um múltiplo de 'numeroAlvo'.
        if (i % numeroAlvo === 0) {
            console.log(`Primeiro múltiplo encontrado: ${i}`);
            
            // 2. "Levantar a Bandeira": Como encontramos o que procurávamos,
            //    mudamos o valor da nossa flag para 'true'.
            multiploEncontrado = true;
            
            // 'break' é o comando chave aqui. Ele interrompe o laço 'for' imediatamente,
            // garantindo que não gastemos tempo procurando outros múltiplos.
            break;
        }
    }

    // --- SAÍDA FINAL ---
    // 3. Checagem da Flag: Após o laço terminar (seja por 'break' ou por chegar ao fim),
    //    verificamos o estado da nossa flag.
    // Se 'multiploEncontrado' ainda for 'false', significa que o 'break' nunca foi executado.
    if (!multiploEncontrado) {
        console.log(`Nenhum múltiplo de ${numeroAlvo} foi encontrado no intervalo de 1 a 1000.`);
    }
}