// Peça ao usuário para digitar um número (vamos chamá-lo de numeroAlvo). Em seguida, use um laço for para percorrer os números de 1 a 1000. O programa deve encontrar e imprimir o primeiro número que seja um múltiplo do numeroAlvo e, em seguida, parar a execução do laço imediatamente.

const prompt = require('prompt-sync')();

const numeroAlvo = Number(prompt("Digite um número alvo: "));

console.log(`Procurando o primeiro múltiplo de ${numeroAlvo} entre 1 e 1000...`)

const inicioContagem = 1;
const fimContagem = 1000;

if(isNaN(numeroAlvo) || !Number.isInteger(numeroAlvo) || numeroAlvo <= 0) {
    console.log("Erro: Por favor, informe um número inteiro e positivo válido: ");
} else {
    let multiploEncontrado = false;

    for(let i = inicioContagem; i <= fimContagem; i++) {
        if(i % numeroAlvo === 0) {
            console.log(`Primeiro múltiplo encontrado: ${i}`);
            multiploEncontrado = true;
            break;
        }
    }

    if (!multiploEncontrado) {
        console.log(`Nenhum múltiplo de ${numeroAlvo} foi encontrado no intervalo de 1 a 1000.`);
    }
}

