// Alterar um Time: Crie um array com nomes de 3 times de futebol. Altere o time que está no índice 1 para um novo time de sua escolha e, em seguida, imprima o array completo no console.

const times = ["Corinthians", "Flamengo", "Santos"];
const timeAntigo = times[1];
const timeNovo = "São Paulo"

times[1] = timeNovo;

console.log("\n--- Alteração na Lista de Times ---\n");
console.log(`O time "${timeAntigo} foi substituido pelo "${timeNovo}`);
console.log(`A lista atualizada é: ${times.join(', ')}.`);