const anoNasc = parseInt(prompt("Em que ano você nasceu?"))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const idade = anoAtual - anoNasc

if(idade >= 18) {
    alert(`Você já tem ${idade} anos e já pode votar`)
} else {
    alert(`Você ainda não completou 18 anos e por isso ainda não pode votar`)
}