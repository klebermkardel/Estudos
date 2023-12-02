function Gerador(msg, qtd) {
    let borda;

    // Escolher o tipo da borda
    let tipoBorda = parseInt(prompt(`Escolha o tipo da borda:\n\n1 - +-------=======------+\n2 - ~~~~~~~~:::::::~~~~~~~\n3 - <<<<<<<<------->>>>>>>`))

    // Escolher a borda com base no tipoBorda
    switch(tipoBorda) {
        case 1:
            borda = "+-------=======------+"
            break
        case 2:
            borda = "~~~~~~~~:::::::~~~~~~"
            break
        case 3:
            borda = "<<<<<<<<------->>>>>>"
            break
        default:
            borda = "+-------=======------+"
    }

    let msgFormatada = borda + "\n"

    for(i = 0; i < qtd; i++) {
        msgFormatada += "   " + msg + "\n"
    }

    msgFormatada += borda 
    alert(msgFormatada)
}

Gerador("Aprendendo Portugol", 4)


