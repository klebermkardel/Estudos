// Peça 'M', 'V' ou 'N' e imprima a saudação correspondente.

// Importa a biblioteca 'prompt-sync' para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("\n--- Saudação por Turno ---");

// Pede ao usuário que digite a letra correspondente ao seu turno.
const turno = prompt("Digite seu turno (M-Matutino, V-Vespertino, N-Noturno): ");

// --- BLOCO DE VALIDAÇÃO ---
// Esta é a primeira camada de validação.
// 1. !turno: Verifica se a entrada está vazia.
// 2. turno.trim().length !== 1: Remove espaços e verifica se o comprimento é diferente de 1.
// Se qualquer uma das condições for verdadeira, a entrada é inválida.
if (!turno || turno.trim().length !== 1) {
    console.log("Erro: Por favor, digite apenas uma letra.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    
    // Normalizamos a entrada para maiúscula para garantir que 'm' e 'M' sejam tratados da mesma forma.
    const turnoNormalizado = turno.trim().toUpperCase();
    
    // Declara a variável que irá armazenar a saudação.
    let saudacao;

    // A estrutura 'switch' é perfeita para comparar o caractere normalizado com as opções válidas.
    switch (turnoNormalizado) {
        case 'M':
            saudacao = "Bom Dia!";
            // 'break' finaliza a execução do switch.
            break;
        case 'V':
            saudacao = "Boa Tarde!";
            break;
        case 'N':
            saudacao = "Boa Noite!";
            break;
        // O bloco 'default' captura qualquer outra letra que não seja M, V ou N.
        // Ele funciona como um "catch-all" para entradas inválidas que passaram na primeira validação.
        default:
            saudacao = "Valor Inválido!";
            break;
    }
    
    // --- SAÍDA FINAL ---
    // Exibe a saudação correspondente ou a mensagem de erro definida no 'switch'.
    console.log(saudacao);
}