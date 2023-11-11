// Cria vetor que armazena os nomes
let nomes = []

// Lê os 7 nomes e os armazena no vetor
for (i = 0; i < 7; i++) {
    let nome = prompt(`Digite o ${i + 1}º nome:`)
    nomes.push(nome)
}

// Exibe os nomes na ordem cadastrada
console.log("Nomes na ordem cadastrada:")

for (i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

console.log("-------------")


// Exibe os nomes na ordem inversa que foram cadastrados
console.log("Nomes na ordem inversa:")

for(i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i])
}