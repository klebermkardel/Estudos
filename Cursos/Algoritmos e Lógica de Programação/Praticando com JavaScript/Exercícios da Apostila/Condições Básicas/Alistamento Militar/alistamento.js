const anoNasc = parseInt(prompt("Em que ano você nasceu?"))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const idade = anoAtual - anoNasc
const idadeObg = 18
const anosRestantes = idadeObg - idade
const anosExc = idade - idadeObg

if(idade < 18) {
    alert(`Faltam ${anosRestantes} anos para o seu alistamento militar obrigatório`)
} else {
    alert(`Você já excedeu ${anosExc} anos para o seu alistamento militar obrigatório`)
}