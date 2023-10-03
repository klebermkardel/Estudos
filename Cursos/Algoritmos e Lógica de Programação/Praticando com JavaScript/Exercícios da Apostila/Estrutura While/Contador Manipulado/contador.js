let v = parseInt(prompt("Digite um número:"))
let c = 1
let mensagem = ""

while (c <= v) {
    mensagem += c + " ";
    c++;
  }
  
  mensagem += "Acabou!";
  alert(mensagem);