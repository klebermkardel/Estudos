let contador = 10;
let mensagem = "";

while (contador >= 3) {
  mensagem += contador + " ";
  contador--;
}

mensagem += "Acabou!";
alert(mensagem);