// Vogal ou Consoante: Peça uma única letra e verifique se é uma vogal ou consoante.

const prompt = require('prompt-sync')();

const entrada = prompt("Digite uma única letra: ");

console.log("");

if(!entrada || entrada.length !== 1) {
    console.log("Erro: Por favor, digite apenas uma letra.");
} else {
    const padraoLetra = /^[a-z]$/i;

    if(padraoLetra.test(entrada)) {
        const letraMinuscula = entrada.toLocaleLowerCase();

        if(letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u') {
            console.log(`A letra "${entrada}" é uma VOGAL`);
        } else {
            console.log(`A letra "${entrada}" é uma CONSOANTE.`);
        }
    } else {
        console.log(`Erro: O caractere "${entrada}" não é uma letra.`)
    }
}