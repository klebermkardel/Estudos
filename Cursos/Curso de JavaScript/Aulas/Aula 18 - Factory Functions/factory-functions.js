const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log("Fazendo ligação...")
    }
}

console.log(celular)

console.log("----------------------------")

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000)
const celular2 = criarCelular('Motorola',5.7, 8000)
console.log("Celular 1: ", celular1)
console.log("Celular 2: ", celular2)
