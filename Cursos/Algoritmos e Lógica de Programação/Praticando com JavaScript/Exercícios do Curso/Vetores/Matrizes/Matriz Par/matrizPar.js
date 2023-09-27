var valores = [];
var l, c, totPar = 0;

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (l = 0; l < 3; l++) {
    valores[l] = [];
    for (c = 0; c < 3; c++) {
        valores[l][c] = gerarNumeroAleatorio(1, 9);
    }
}

console.log("MATRIZ:");
console.log("-------------");
for (l = 0; l < 3; l++) {
    var linha = "";
    for (c = 0; c < 3; c++) {
        if (valores[l][c] % 2 === 0) {
            linha += "{" + valores[l][c] + "} ";
            totPar++;
        } else {
            linha += valores[l][c] + " ";
        }
    }
    console.log("[" + linha.trim() + "]");
}

console.log("Ao todo foram digitados " + totPar + " valores PARES");
