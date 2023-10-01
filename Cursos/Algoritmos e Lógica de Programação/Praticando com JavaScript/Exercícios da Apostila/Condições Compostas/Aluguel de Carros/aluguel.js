const tipoCarro = prompt("Digite o tipo de carro (popular ou luxo): ")
const diasAluguel = parseInt(prompt("Digite a quantidade de dias de aluguel: "))
const kmPercorridos = parseFloat(prompt("Digite a quantidade de quilômetros percorridos: "))

let custoDiario
if(tipoCarro === "popular") {
    custoDiario = 90
} else if(tipoCarro === "luxo") {
    custoDiario = 150
} else {
    alert(`Tipo de carro inválido`)
    process.exit(1)
}

let custoKm
if(tipoCarro === "popular") {
    if(kmPercorridos <= 100) {
        custoKm = kmPercorridos * 0.20
    } else {
        custoKm = 100 * 0.20 + (kmPercorridos - 100) * 0.10
    }
} else if(tipoCarro === "luxo") {
    if(kmPercorridos <= 200) {
        custoKm = kmPercorridos * 0.30
    } else {
        custoKm = 200 * 0.30 + (kmPercorridos - 200) * 0.25
    }
}

const custoTotal = custoDiario * diasAluguel + custoKm

alert(`O preço a ser pago é: R$ ${custoTotal.toFixed(2)}`)
