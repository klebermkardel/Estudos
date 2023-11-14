let nomes = []
let sexos = []
let sals = []

for(i = 0; i < 5; i++) {
    let nome = prompt(`Informe o nome do ${i + 1}º funcionário:`)
    let sexo = prompt(`Informe o sexo do ${i + 1}º funcionário:`)
    let sal = parseFloat(prompt(`Informe o salário do ${i + 1}º funcionário:`))

    nomes.push(nome)
    sexos.push(sexo)
    sals.push(sal)
}

console.log("Mulheres com salário acima de R$ 5.000,00:")

for(i = 0; i < nomes.length; i++) {
    if((sexos[i] === 'M') && (sals[i] > 5000)) {
        console.log("Nome: " + nomes[i] + ", Sexo: " + sexos[i] + ", Salário: " + sals[i])
    }
}
