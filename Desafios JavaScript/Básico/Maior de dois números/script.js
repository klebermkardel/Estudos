

function maiorDeDoisNumeros(n1, n2) {
    if(n1 > n2) {
        return `O primeiro número (${n1}) é maior do que o segundo número (${n2})`
    } else if(n2 > n1) {
        return `O segundo número (${n2}) é maior do que o primeiro número (${n1})`
    } else {
        return `${n1} e ${n2} são dois números iguais`
    }

}

const num1 = 0
const num2 = 0

console.log(maiorDeDoisNumeros(num1, num2))