const {gets, print} = require('./funcoes-auxiliares');

let maiorValorEncontrado = 0;


for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);