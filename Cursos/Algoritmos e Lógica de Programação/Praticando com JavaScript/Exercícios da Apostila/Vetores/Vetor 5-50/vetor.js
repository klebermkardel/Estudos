let vetor = new Array(10)
let valor = 5
let msg = "["

for (i = 0; i < vetor.length; i++) {
    vetor[i] = valor
    valor += 5
    msg += ` ${vetor[i]},`
}

msg = msg.slice(0, -1)
msg += " ]"

alert(msg)
