// Falsy: undefined, null, 0, false, '', NaN

// Truthy
let corPersonalizada = 'Vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil) // Exibe vermelho pois foi o primeiro valor truthy encontrado na comparação