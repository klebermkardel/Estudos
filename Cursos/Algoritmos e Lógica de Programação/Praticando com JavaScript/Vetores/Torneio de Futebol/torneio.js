let time = [];
let l, c;

console.log("------------------");
console.log("CAMPEONATO FUTEBOL");
console.log("------------------");

for (c = 1; c <= 4; c++) {
    let nomeTime = prompt(`Nome do ${c}º time: `);
    time.push(nomeTime);
}

console.log("-------------------");
console.log(" TABELA DE PARTIDAS");
console.log("-------------------");

for (l = 1; l <= 4; l++) {
    for (c = 1; c <= 4; c++) {
        if (l !== c) {
            console.log(`${time[l - 1]} [ ] x [ ] ${time[c - 1]}`);
        }
    }
}
