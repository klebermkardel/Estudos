// Tipos de Valores:

let nome = 'Kleber' 
let idade = 26 
let estaAprovado = true 
let sobrenome = undefined 

let pessoa = {
    nome: 'Kleber',
    sobrenome: 'Molina Kardel', 
    idade: 26,
    peso: 101.3,
    altura: 1.75,
    sexo: 'M',
    estaAprovado: true,

}

console.log(pessoa)
console.log("    Caracteríscas da pessoa     ")
console.log("--------------------------------")
console.log("Nome completo: " + pessoa.nome, pessoa.sobrenome)
console.log("Sexo: " + pessoa.sexo)
console.log("Idade: " + pessoa.idade + " anos")
console.log("Peso: " + pessoa.peso + "Kg")
console.log("Altura: " + pessoa.altura + "m")
if(pessoa.estaAprovado === true) {
    console.log("Situação: Aprovado")
} else {
    console.log("Situação: Reprovado")
}