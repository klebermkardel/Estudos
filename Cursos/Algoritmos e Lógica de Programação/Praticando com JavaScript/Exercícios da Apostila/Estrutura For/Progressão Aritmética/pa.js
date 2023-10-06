let a1 = parseFloat(prompt("Digite o primeiro termo da PA:"));
let r = parseFloat(prompt("Digite a razão da PA:"));

let soma = 0;

for (n = 1; n <= 10; n++) {
    let an = a1 + (n - 1) * r;

    soma += an;

    alert(`Termo ${n}: ${an}`);
}

alert(`Soma dos 10 primeiros termos: ${soma}`);
