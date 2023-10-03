let contador = 0;
let mensagem = "";

while (contador <= 18) {
  mensagem += contador + " ";
  contador += 3;
}

mensagem += "Acabou!";
alert(mensagem);