const l1 = parseInt(prompt("Digite o primeiro lado"))
const l2 = parseInt(prompt("Digite o segundo lado"))
const l3 = parseInt(prompt("Digite o terceiro lado"))

if(l1 < l2+l3 && l2 < l1+l3 && l3 < l1+l2) {
    alert(`Triângulo!`)
} else {
    alert(`Não é um triângulo`)
}
