let ano_atual, ano_nasc, idade

ano_atual = parseInt(prompt("Em que ano nós estamos? "))
ano_nasc = parseInt(prompt("Em que ano eu nasci? "))
idade = ano_atual - ano_nasc

alert(`Em ${ano_atual} você terá ${idade} anos!`)

if(idade >= 18) {
    alert(`Você já é maior de idade!`)
} else {
    alert(`Você ainda não atingiu a maioridade!`)
}