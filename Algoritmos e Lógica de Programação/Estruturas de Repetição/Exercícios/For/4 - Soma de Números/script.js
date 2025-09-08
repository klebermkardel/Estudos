// Soma de Números: Escreva um programa que calcula a soma de todos os números de 1 a 100.
// Use um laço for e uma variável para acumular o total.

// --- INICIALIZAÇÃO DO ACUMULADOR ---
// Declaramos uma variável 'soma' com 'let' porque seu valor será alterado a cada volta do laço.
// É crucial que ela comece com 0 para que a primeira soma seja correta (0 + 1).
let soma = 0;

// --- LAÇO FOR ---
// O laço irá repetir 100 vezes, com a variável de controle 'i' indo de 1 até 100.
for (let i = 1; i <= 100; i++) {
    // --- LÓGICA DE ACUMULAÇÃO ---
    // A cada repetição, o valor atual de 'i' é adicionado ao valor já existente em 'soma'.
    // 'soma += i' é uma forma curta e eficiente de escrever 'soma = soma + i'.
    // Ex: 1ª volta: soma = 0 + 1 = 1
    //     2ª volta: soma = 1 + 2 = 3
    //     3ª volta: soma = 3 + 3 = 6
    //     ... e assim por diante.
    soma += i;
}

// --- SAÍDA FINAL ---
// O console.log é colocado FORA do laço para ser executado apenas uma vez,
// após o laço ter terminado todo o seu trabalho e a 'soma' conter o valor final (5050).
console.log(`O valor total da soma de todos os números de 1 a 100 é: ${soma}`);