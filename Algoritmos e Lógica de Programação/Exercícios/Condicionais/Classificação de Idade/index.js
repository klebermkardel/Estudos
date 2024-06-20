// Leia a idade de uma pessoa e classifique-a em: criança (0-12), adolescente (13-17), adulto (18-59) ou idoso (60+).

const idade = parseInt(prompt("Informe sua idade:"))

if(idade >= 0 && idade <= 12) {
    alert(`Você é criança`)
} else if (idade >= 13 && idade <= 17) {
    alert(`Você é adolescente`)
} else if (idade >= 18 && idade <= 59) {
    alert(`Você é adulte`)
} else {
    alert(`Você é idose`)
}