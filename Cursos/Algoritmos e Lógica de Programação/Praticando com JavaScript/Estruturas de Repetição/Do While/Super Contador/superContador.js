option = parseInt(prompt("Super Contador\n[1] De 1 a 10\n[2] De 10 a 1\n[3] Sair"))

switch(option) {
    case 1:
        c = 1
        do {
            console.log(c)
            c++
        } while (c <= 10)
        break;
    case 2:
        c = 10
        do {
            console.log(c)
            c--
        } while (c > 0)
        break;
    case 3:
        alert(`Programa finalizado!`)
        break;
    default:
        alert(`Inválido!`)
        break;
}