let vetor = new Array(8);
let msg = "["

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = 999;
    msg += ` ${vetor[i]},`
}

// Remove a última vírgula
msg = msg.slice(0, -1)

msg += " ]"

alert(msg)