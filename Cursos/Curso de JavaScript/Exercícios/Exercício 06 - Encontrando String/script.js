// Criar uma método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    Título: 'Harry Potter e a Pedra Filosofal',
    ano: 2001,
    Diretor: 'Chris Columbus',
    Personagem: 'Dobby'
}
exibirPropriedades(filme)
function exibirPropriedades(obj) {
    for (prop in obj) {
        if(typeof obj[prop] === 'string')
            console.log(prop + ':',obj[prop])
    }
        
}