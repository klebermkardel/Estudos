const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function() {
        console.log("Fazendo ligação...")
    }
}

console.log(celular)
console.log("----------------------------")

const novoObjeto = Object.assign({},celular)
console.log(novoObjeto)