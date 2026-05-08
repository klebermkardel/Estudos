function maiorDeDoisNumeros(num1, num2) {
    if(num1 > num2) {
        return `O primeiro número (${num1}) é maior que o segundo número (${num2})`
    } else if(num2 > num1) {
        return `O segundo numero (${num2}) é maior que o primeiro número (${num1})`
    } else {
        return `Os dois números são iguais`
    }
}

const num1 = 5
const num2 = 5

console.log(maiorDeDoisNumeros(num1, num2))

