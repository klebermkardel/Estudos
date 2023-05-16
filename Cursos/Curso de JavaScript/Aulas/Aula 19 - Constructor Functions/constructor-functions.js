// camelCase - umDoisTresQuatro
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

// Pascal Case - UmDoisTresQuatro

//this referencia o objeto atual
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = this.tamanhoTela,
    this.capacidadeBateria = this.capacidadeBateria,
    this.ligar = function () {
        console.log("Fazendo Ligação...")
    }
}

const celular1 = new Celular('Asus',5.5,5000)
console.log("Celular 1: ",celular1)

