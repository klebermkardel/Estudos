let primeiroValor = parseInt(prompt("Digite o primeiro Valor:"));
let ultimoValor = parseInt(prompt("Digite o último Valor:"));
let salto = parseInt(prompt("Digite o salto:"));

let contagem = "";

if (primeiroValor > ultimoValor) {
  let atual = primeiroValor;
  while (atual >= ultimoValor) {
    contagem += atual + " ";
    atual -= salto;
  }
} else {
  let atual = primeiroValor;
  while (atual <= ultimoValor) {
    contagem += atual + " ";
    atual += salto;
  }
}

alert("Contagem: " + contagem + "Acabou!");
