// Recever uma quantidade de valores p/ avaliar
// Função exibe se cada valor é par ou ímpar

exibirTipo(10)
function exibirTipo(limite) {
    for(let i = 0; i <= limite; i++) {
        if(i % 2 === 0)
            console.log(i,"é PAR")
        else
            console.log(i,'é ÍMPAR')
    }
}