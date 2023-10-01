const valorCasa = parseFloat(prompt("Informe o valor da casa: "))
const sal = parseFloat(prompt("Informe o seu salário: "))
const prazo = parseInt(prompt("Informe em quantos anos deseja pagar?"))

const parcelaBruta = valorCasa / (prazo * 12)

const limitePrestacao = sal * 0.3

if(parcelaBruta <= limitePrestacao) {
    alert(`Empréstimo aprovado! O valor da prestação mensal é aceitável.`)
} else {
    alert(`Empréstimo negado! O valor da prestação mensal excede 30% do salário.`);
}

console.log(parcelaBruta.toFixed(2))