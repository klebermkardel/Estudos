function ordenaVetor() {
    for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 10; j++) {
            if (v[i] > v[j]) {
                let aux = v[i];
                v[i] = v[j];
                v[j] = aux;
            }
        }
    }
}

let v = [];
for (let c = 1; c <= 10; c++) {
    let valor = parseInt(prompt(`Digite o ${c}º valor:`));
    v.push(valor);
}

ordenaVetor();

console.log("-------------------------------");
console.log("Vetor Ordenado: ");
console.log("-------------------------------");
for (let c = 0; c < 10; c++) {
    console.log(v[c] + " ");
}
