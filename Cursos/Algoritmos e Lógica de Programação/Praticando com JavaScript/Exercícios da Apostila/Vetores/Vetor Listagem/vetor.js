let idades = []
let nomes = []

for (i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}º pessoa`)
    let idade = parseInt(prompt(`Digite o idade da ${i + 1}º pessoa`))

    nomes.push(nome)
    idades.push(idade)
}

console.log("Pessoas menores de idade")


for(i = 0; i < nomes.length; i++) {
    if(idades[i] < 18) {
        console.log("Nome: " + nomes[i] + ", Idade: " + idades[i])
    }
}
