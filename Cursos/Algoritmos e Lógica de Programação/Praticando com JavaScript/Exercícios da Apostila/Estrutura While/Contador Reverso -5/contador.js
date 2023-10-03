let contador = 100;
let mensagem = "";

while (contador >= 0) {
  mensagem += contador + " ";
  contador -= 5;
}

mensagem += "Acabou!";
alert(mensagem);