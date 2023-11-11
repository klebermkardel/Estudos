// Cria vetor para armazenar números sorteados
let vetor = []

// Preenche o vetor com números aleatórios entre 1 e 15
for(i = 0; i < 30; i++) {
    let randomNum = Math.floor(Math.random() * 15) + 1
    vetor.push(randomNum)
}

// Mostra o vetor gerado
console.log("Vetor gerado:")
console.log(vetor)

// Solicita chave ao usuário
let chave = parseInt(prompt("Digite um número para buscar no vetor:"))

// Procura a chave no vetor e conta o número de vezes que ela aparede
let posicoes = []
let count = 0

for(i = 0; i < vetor.length; i++) {
    if(vetor[i] === chave) {
        posicoes.push(i)
        count++
    }
}

// Mostra as posições e quantas vezes a chave foi encontrada
if (posicoes.length > 0) {
    console.log(`A chave ${chave} foi encontrada nas posições: ${posicoes}`);
    console.log(`A chave ${chave} foi sorteada ${count} vezes.`);
} else {
    console.log(`A chave ${chave} não foi encontrada no vetor.`);
}