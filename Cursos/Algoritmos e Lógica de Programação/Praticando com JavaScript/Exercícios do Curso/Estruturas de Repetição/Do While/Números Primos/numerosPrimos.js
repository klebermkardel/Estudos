c = 1;
contDiv = 0;

n = parseInt(prompt("Digite um número"));

do {
    if (n % c === 0) {
        contDiv++;
    }
    c++;
} while (c <= n);

if (contDiv > 2) {
    console.log(`O número ${n} não é um número primo`)
} else {
    console.log(`O número ${n} é um número primo`)

}