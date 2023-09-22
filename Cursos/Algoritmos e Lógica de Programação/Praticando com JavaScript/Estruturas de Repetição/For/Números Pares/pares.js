let v = parseInt(prompt("Digite um valor: "));

console.log("Contagem Progressiva:");
for (let c = 0; c <= v; c += 2) {
    console.log(c);
}


if(v % 2 === 1) {
    v = v - 1
}
console.log("Contagem Regressiva:");
for (let c = v; c >= 0; c -= 2) {
    console.log(c);
}
