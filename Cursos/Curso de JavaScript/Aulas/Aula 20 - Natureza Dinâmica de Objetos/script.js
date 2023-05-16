// Natureza Dinâmica de Objetos

const mouse = {
    cor: 'red',
    marca: 'Dazz',

}

mouse.velocidade = 5000
mouse.trocarDPI = function() {
    console.log('mudando DPI')
}
delete mouse.velocidade
delete mouse.cor
console.log(mouse)