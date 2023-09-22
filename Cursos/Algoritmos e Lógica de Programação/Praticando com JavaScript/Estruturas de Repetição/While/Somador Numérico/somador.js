let contador = 1;
let n;
let maior = Number.NEGATIVE_INFINITY; 
let menor = Number.POSITIVE_INFINITY; 
let soma = 0;

while (contador <= 5) {
    n = parseInt(prompt(`Digite o ${contador}º valor:`));

    if (n > maior) {
        maior = n;
    }

    if (n < menor) {
        menor = n;
    }

    soma = soma + n;
    contador++;
}

alert(`A soma de todos os valores foi ${soma}\nMaior valor: ${maior}\nMenor valor: ${menor}`);
