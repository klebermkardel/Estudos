const largura = parseFloat(prompt("Informe a largura da parede:"))
const altura = parseFloat(prompt("Informe a altura da parede:"))

const area = largura * altura

const qtdTinta = area / 2

alert(`Área a ser pintada: ${area}m²
Quantidade de tinta: ${qtdTinta}L`)