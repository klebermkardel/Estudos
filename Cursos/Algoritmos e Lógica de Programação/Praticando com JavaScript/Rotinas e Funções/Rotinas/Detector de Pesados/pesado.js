let nome, pesado = ""
let peso
let mai = 0

Topo()
for(i = 1; i <= 5; i++) {
    nome = prompt(`Digite o nome:`)
    peso = parseFloat(prompt(`Digite o peso de ${nome}: `))
    if(peso > mai) {
        mai = peso
        pesado = nome
    }
    Topo()
}
Topo()
console.log(`A pessoa mais pesada foi ${pesado} com ${mai} Kg`)


function Topo() {
    console.clear()
    console.log("------------------------------------")
    console.log(" D E T E C T O R   DE   P E S A D O ")
    console.log(` Maior Peso até agora: ${mai} Kg`)
    console.log("------------------------------------")
}