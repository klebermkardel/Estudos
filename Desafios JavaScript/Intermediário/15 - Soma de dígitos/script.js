function somarDigitos(num) {
    return String(num).split("").reduce((acc, d) => acc + Number(d), 0)
}

const num = 123

console.log(somarDigitos(num))