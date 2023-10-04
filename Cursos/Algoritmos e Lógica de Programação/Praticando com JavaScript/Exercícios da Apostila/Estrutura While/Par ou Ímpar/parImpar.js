let c = 1
let par = 0
let impar = 0
let mensagem = ""

while(c <= 6) {
    let num = parseInt(prompt(`Digite o ${c}º número:`))
    if(num % 2 === 0) {
        par++
        mensagem += `[${num}] `
    } else {
        impar++
        mensagem += `(${num}) `
    }
    c++
}

mensagem += `\nAo todo foram digitados ${par} números pares e ${impar} números ímpares`

alert(mensagem)