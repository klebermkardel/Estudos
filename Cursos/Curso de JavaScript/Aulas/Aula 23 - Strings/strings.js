// Tipo primitivo
const mensagem = 'minha primeira mensagem'

// Tipo Objeto
const outraMensagem = new String('bom dia')

// Retorno esperado: string
console.log(typeof(mensagem))

// Retorno esperado: object
console.log(typeof(outraMensagem))

console.log("----------------------------------")

// var.lenght -> Retorna tamanho da string

// Retorno esperado: 7
console.log(outraMensagem.length)

// Retorno esperado: "m" - retorna caractere posicionado no índice indicado
console.log(outraMensagem[2])

// var.includes -> retorna verdadeiro ou falso para o parâmetro passado (verificar se contém o parâmetro dentro da string)

// Retorno esperado: true
console.log(mensagem.includes('primeira'))

// var.startsWith e endsWith -> retorna true ou false verificando se string começa ou termina com parâmetro passado

// Retorno esperado: true
console.log(mensagem.startsWith('m'))

//var.indexOf -> retorna o índice do parâmetro passado

// Retorno esperado: 6
console.log(mensagem.indexOf('primeira'))

// var.replace('','') -> substitui um parâmetro pelo outro

// Retorno esperado: 'sua primeira mensagem'
console.log(mensagem.replace('minha', 'sua'))
