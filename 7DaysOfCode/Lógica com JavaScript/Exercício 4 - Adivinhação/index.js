/* Criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */

// Definindo o número a ser adivinhado (entre 0 e 10)
const numero = Math.floor(Math.random() * 11)

// Definindo o número de tentativas
const tentativasMaximas = 3
let tentativasRestantes = tentativasMaximas

// Função para verificar se o número foi adivinhado corretamente
function verificarAdivinhacao(chute) {
    if(chute === numero) {
        alert("Parabéns! Você acertou!")
        return true
    } else {
        alert("Você errou!")
        tentativasRestantes--

        if(tentativasRestantes > 0) {
            alert(`Tente novamente. Restam ${tentativasRestantes} tentativas`)
        } else {
            alert(`Suas tentativas acabaram. O número era ${numero}`)
        }
        return false
    }
}

// Função principal para executar o programa
function executarJogo() {
    alert("Bem-vindo ao jogo de adivinhação!")

    for(let i = 0; i < tentativasMaximas; i++) {
        const chute = parseInt(prompt("Digite um número entre 0 e 10:"))

        if(verificarAdivinhacao(chute)) {
            return
        }
    }
}

// Executar o jogo
executarJogo()