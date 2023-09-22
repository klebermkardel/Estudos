let t1 = { value: 0 };
console.log(t1.value);

let t2 = { value: 1 };
console.log(t2.value);

function ProximoFibonacci(A, B) {
    var C = A.value + B.value;
    console.log(C);
    A.value = B.value;
    B.value = C;
}

for (let c = 3; c <= 10; c++) {
    ProximoFibonacci(t1, t2);
}
