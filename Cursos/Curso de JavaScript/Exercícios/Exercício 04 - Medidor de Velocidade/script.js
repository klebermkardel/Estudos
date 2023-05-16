// Velocidade máxima: até 70Km
// Caso velocidade máxima seja até 70Km => 'Ok'
// a cada 5Km acima do limite ganha um ponto na carteira
//Caso pontos seja maior que 12 => 'Carteira Suspensa'

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if(velocidade <= velocidadeMaxima)
        console.log('Ok')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
        if(pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos:',pontos)
    }
}