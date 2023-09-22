function ProximoFibonacci(N1, N2) {
    var N3 = N1 + N2;
    N1 = N2;
    N2 = N3;
    return N3;
}

var T1 = 0;
console.log(T1);
var T2 = 1;
console.log(T2);

for (var I = 3; I <= 15; I++) {
    T3 = ProximoFibonacci(T1, T2);
    console.log(T3);
    T1 = T2; // Atualizando T1 com o novo valor de T2
    T2 = T3; // Atualizando T2 com o novo valor de T3
}

