let mat = [];
let l, c;

for (l = 0; l < 3; l++) {
    mat[l] = [];
    for (c = 0; c < 2; c++) {
        mat[l][c] = parseInt(prompt("Digite o valor da posição [" + (l + 1) + "," + (c + 1) + "]: "));
    }
}

console.log("Matriz preenchida:");
for (l = 0; l < 3; l++) {
    let linha = "";
    for (c = 0; c < 2; c++) {
        linha += mat[l][c] + " ";
    }
    console.log("[" + linha.trim() + "]");
}
