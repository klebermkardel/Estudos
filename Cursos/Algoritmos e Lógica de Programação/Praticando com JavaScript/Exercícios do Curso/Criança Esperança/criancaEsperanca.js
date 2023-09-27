let d, valor

d = parseInt(prompt(`---------------------------\n  CRIANÇA ESPERANÇA     \n---------------------------\n Muito obrigado por ajudar \n [1] para doar R$10 \n [2] para doar R$25 \n [3] para doar R$50 \n [4] para doar outros valores \n [5] para cancelar `))

switch(d) {
    case 1:
        valor = 10
        break
    case 2:
        valor = 25
        break
    case 3:
        valor = 50
        break
    case 4:
        valor = parseInt(prompt("Qual o valor da doação?"))
        break
    case 5:
        valor = 0
}

if(valor === 0) {
    alert(`---------------------------\n Muito obrigado! Volte sempre! `)
} else {
    alert(`---------------------------\n Sua doação foi de R$ ${valor.toFixed(2)} \n Muito obrigado! `)
}