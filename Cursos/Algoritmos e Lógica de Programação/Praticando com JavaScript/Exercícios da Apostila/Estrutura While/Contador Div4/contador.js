let c = 30;
let mensagem = "";

while (c >= 0) {
  if (c % 4 === 0) {
    mensagem += "[" + c + "] ";
  } else {
    mensagem += c + " ";
  }
  c--;
}

mensagem += "Acabou!";
alert(mensagem);
