let L1, L2, L3, EQ, ES, TRI

L1 = parseFloat(prompt("Digite o primeiro lado: "))
L2 = parseFloat(prompt("Digite o segundo lado: "))
L3 = parseFloat(prompt("Digite o terceiro lado: "))

TRI = (L1 < L2 + L3) && (L2 < L1 + L3) && (L3 < L1 + L2)
EQ = (L1 === L2) && (L2 === L3)
ES = (L1 !== L2) && (L2 !== L3) && (L1 !== L3)

console.log(`Forma triângulo? ${TRI}`)
console.log(`O triângulo é EQUILATERO: ${EQ}`)
console.log(`O triângulo é ESCALENO: ${ES}`)

