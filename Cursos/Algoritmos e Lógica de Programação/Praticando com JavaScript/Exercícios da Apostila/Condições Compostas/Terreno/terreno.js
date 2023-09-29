const l = parseFloat(prompt("Informe a largura do terreno:"))
const c = parseFloat(prompt("Informe o comprimento do terreno:"))

const area = l * c

if(area < 100) {
    alert(`TERRENO POPULAR`)
} else if(area >= 100 && area <= 500) {
    alert(`TERRENO MASTER`)
} else {
    alert(`TERRENO VIP`)
}