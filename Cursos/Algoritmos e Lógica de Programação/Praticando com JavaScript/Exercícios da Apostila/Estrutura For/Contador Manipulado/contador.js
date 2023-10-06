let num = parseInt(prompt("Digite um número"))
let msg = ""

for (i = 0; i <= num; i++) {
    msg += `${i}, `
}

msg += "FIM!"
alert(msg)

