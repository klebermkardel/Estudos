function Gerador(msg, qtd) {
    let linha = "+-------=======------+";
    let msgFormatada = linha + "\n";

    for (i = 0; i < qtd; i++) {
        msgFormatada += "   " + msg + "\n";
    }

    msgFormatada += linha;
    alert(msgFormatada);
}

// Chamando o procedimento Gerador() com mensagem personalizada e quantidade
Gerador("Aprendendo Portugol", 4);
