// Date

// Retorno esperado: data atual com horário
const data1 = new Date()
console.log(data1)

// Retorno esperado: data pré-definida pela string com horário
const data2 = new Date('April 19 2023 10:40')
console.log(data2)

// Retorno esperado: Data com parâmetros Ano, Mês, Dia, Hora, Minutos
// Os meses são representados de 00 até 11
const data3 = new Date(2023,03,19,10,40)
console.log(data3)

console.log('---------------------------------')

// setFullYear() -> Altera o ano
data3.setFullYear(2030)
console.log(data3)

// toDateString() -> Converte objeto data em string

// Retorno esperado: Wed Apr 19 2023
console.log(data1.toDateString())
