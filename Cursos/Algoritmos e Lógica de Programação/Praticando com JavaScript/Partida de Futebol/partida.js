let gols1, gols2, dif

gols1 = parseInt(prompt("Quantos gols do São Paulo?"))
gols2 = parseInt(prompt("Quantos gols do Corinthians?"))

if(gols1 > gols2) {
    dif = gols1 - gols2 
} else {
    dif = gols2 - gols1 
}

switch (dif) {
    case 0:
        alert(`STATUS: EMPATE`);
        break;
    case 1:
    case 2:
    case 3:
        alert(`STATUS: PARTIDA NORMAL`);
        break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert(`STATUS: GOLEADA`);
        break;
    default:
        alert(`STATUS: ALGO INCOMUM\nVocê digitou dados incorretos`);
        break;
}