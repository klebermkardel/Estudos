let inicio = parseInt(prompt("Início da contagem: "))
let fim = parseInt(prompt("Fim da contagem"))

if(fim > inicio) {
    let contador = inicio
    while(contador <= fim) {
        console.log(contador)
        contador++
    }
} else {
    let contador = inicio
    while(contador >= fim) {
        console.log(contador)
        contador--
    }
}

