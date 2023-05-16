// Loop For In

const pessoa = {
    nome: 'Kleber',
    idade: 26
}

for(let chave in pessoa) {
    console.log(chave,pessoa)
}

const cores = ['vermelho', 'azul', 'verde']

for(indice in cores) {
    console.log(indice,cores[indice])
}

// Loop For Of
for(let cor of cores) {
    console.log(cor)
}