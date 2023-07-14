// Exercício 2 - Crie uma caixa onde o sistema possa fazer 3 perguntas ao usuário e armazenar as respostas em variáveis

const nome = prompt("Qual o seu nome? ")
const idade = parseInt(prompt("Quantos anos você tem? "))
const linguagem = prompt("Qual linguagem de programação você está estudando?")

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!")

const resposta = parseInt(prompt("Você está gostando de estudar " + linguagem + "? SIM [1] NÃO [2]"))

if(resposta === 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if(resposta === 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
    alert("Resposta inválida!")
}