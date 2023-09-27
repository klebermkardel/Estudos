let v
let tot010 = 0
let sImpD = 0
let sImpF = 0

for(c = 1; c <= 6; c++) {
     v = parseInt(prompt("Digite um valor:"))
     if(v >= 0 && v <= 10){
        tot010++
        if(v % 2 === 1) {
            sImpD = sImpD + v
        }
     }
     if(v % 2 === 1) {
        sImpF = sImpD + v
     }
}

alert(`Ao todo você digitou ${tot010} valores entre 1 e 10\nA soma dos números ímpares neste intervalo foi de ${sImpD}\nA soma dos números ímpares dentro e fora do intervalo foi de ${sImpF}`)