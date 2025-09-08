// Peça 'M', 'V' ou 'N' e imprima a saudação correspondente.

const prompt = require('prompt-sync')();
console.log("\n--- Saudação por Turno ---");

const turno = prompt("Digite seu turno (M-Matutino, V-Vespertino, N-Noturno): ");

if (!turno || turno.trim().length !== 1) {
    console.log("Erro: Por favor, digite apenas uma letra.");
} else {
    const turnoNormalizado = turno.trim().toUpperCase();
    let saudacao;

    switch (turnoNormalizado) {
        case 'M':
            saudacao = "Bom Dia!";
            break;
        case 'V':
            saudacao = "Boa Tarde!";
            break;
        case 'N':
            saudacao = "Boa Noite!";
            break;
        default:
            saudacao = "Valor Inválido!";
            break;
    }
    console.log(saudacao);
}