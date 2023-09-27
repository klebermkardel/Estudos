const qtdCigarros = parseInt(prompt("Quantos cigarros você fuma por dia?"))
const qtdAnos = parseInt(prompt("Há quantos anos você fuma?"))
const diasPorAno = 365.25

const totalCigarros = qtdCigarros * diasPorAno * qtdAnos

const reducaoVidaMin = totalCigarros * 10

const reducaoVidaDias = reducaoVidaMin / (24 * 60)

alert(`Você já perdeu ${parseInt(reducaoVidaDias)} dias de vida devido ao tabagismo`)