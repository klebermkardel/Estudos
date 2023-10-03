let primeiroTermo = 6;
let ultimoTermo = 100;
let intervalo = 2;
let soma = 0;

let termoAtual = primeiroTermo;

while (termoAtual <= ultimoTermo) {
  soma += termoAtual;
  termoAtual += intervalo;
}


alert("A soma é: " + soma);
