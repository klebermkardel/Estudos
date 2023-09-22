let totH18 = 0;
let totM25 = 0;
let resp;

do {
    let sexo = prompt("Qual o sexo? [M/F]");
    let idade = parseInt(prompt("Qual a idade?"));
    let cabelo = parseInt(prompt("Qual a cor do cabelo?\n\n[1] Preto\n[2] Castanho\n[3] Loiro\n[4] Ruivo"));

    if (sexo === "M" && idade > 18 && cabelo === 2) {
        totH18++;
    }

    if (sexo === "F" && idade >= 25 && idade <= 30 && cabelo === 3) {
        totM25++;
    }

    resp = prompt("Quer continuar? [S/N]");
} while (resp === "S");

alert(`RESULTADO FINAL:\nTotal de homens com mais de 18 e cabelos castanhos: ${totH18}\nTotal de mulheres entre 25 e 30 anos e cabelos loiros: ${totM25}`);