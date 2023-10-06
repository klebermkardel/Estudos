let num = parseInt(prompt("Digite um número para calcular sua tabuada:"))
let tabuada = ""

for(i = 1; i <= 10; i++) {
    let resultado = num * i
    tabuada += `${num} x ${i} = ${resultado}\n`
}

alert(tabuada)