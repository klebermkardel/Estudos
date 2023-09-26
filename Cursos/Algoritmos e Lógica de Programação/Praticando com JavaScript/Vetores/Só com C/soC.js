let nome;
let soC = [];
let c, tot;

tot = 0;

for (c = 1; c <= 10; c++) {
    nome = prompt("Digite seu nome: ");
    
    if (nome.charAt(0).toUpperCase() === "C") {
        tot++;
        soC[tot] = nome;
    }
}

console.clear();
console.log("LISTAGEM FINAL");

for (c = 1; c <= tot; c++) {
    console.log(soC[c]);
}
