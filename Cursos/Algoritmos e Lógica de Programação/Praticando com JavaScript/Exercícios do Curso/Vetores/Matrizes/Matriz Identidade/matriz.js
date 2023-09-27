var mID = [];
var i, j;

for (i = 0; i < 3; i++) {
    mID[i] = [];
    for (j = 0; j < 3; j++) {
        if (i === j) {
            mID[i][j] = 1;
        } else {
            mID[i][j] = 0;
        }
    }
}

console.log("MATRIZ IDENTIDADE:");
for (i = 0; i < 3; i++) {
    var linha = "";
    for (j = 0; j < 3; j++) {
        linha += mID[i][j] + " ";
    }
    console.log("[" + linha.trim() + "]");
}
