// Exercício - Montador de Endereços

// Criar um objeto endereço que contém:
// Rua
// Cidade
// CEP 
// exibirEndereco(endereco)

const endereco = {
    Rua: 'Rua XXX',
    Cidade: 'São Paulo',
    CEP: '00000-000',
}

function exibirEndereco(endereco) {
    for(let chave in endereco) {
        console.log(chave + ":",endereco[chave])
    }
}

exibirEndereco(endereco)