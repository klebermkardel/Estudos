let c = 1;

let totH = 0;
let totM = 0;
let somaIdTot = 0;
let somaIdH = 0;
let m20 = 0;

while (c <= 5) {
    let sexo = prompt(`Informe o sexo da ${c}º pessoa: [H/M]`);
    let idade = parseInt(prompt(`Informe a idade da ${c}º pessoa:`));

    somaIdTot += idade;

    if (sexo === "H") {
        totH++;
        somaIdH += idade;
    } else if (sexo === "M") {
        totM++;
        if (idade > 20) {
            m20++;
        }
    }

    c++;
}

let media = somaIdTot / 5;
let mediaH = totH > 0 ? somaIdH / totH : 0;

alert(`Homens cadastrados: ${totH}\nMulheres cadastradas: ${totM}\nMédia de idade total: ${media}\nMédia da idade dos homens: ${mediaH}\nMulheres com mais de 20 anos: ${m20}`);
