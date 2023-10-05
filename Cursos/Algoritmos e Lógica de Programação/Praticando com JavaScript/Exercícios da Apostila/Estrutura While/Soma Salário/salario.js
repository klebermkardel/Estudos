let totSalH = 0;
let totSalM = 0;
let resp;

while (true) {
    let sexo = prompt("Informe o sexo da pessoa: [H/M]");
    let sal = parseFloat(prompt("Informe o salário dessa pessoa:"));

    if (sexo === 'H' || sexo === 'h') {
        totSalH += sal;
    } else if (sexo === 'M' || sexo === 'm') {
        totSalM += sal;
    } else {
        alert("Sexo inválido. Use 'H' para homem ou 'M' para mulher.");
        continue; // Volta para o início do loop
    }

    resp = prompt("Deseja continuar? [S/N]");
    if (resp !== 'S' && resp !== 's') {
        break; // Sai do loop se a resposta não for 'S' ou 's'
    }
}

alert(`Total de salário dos homens: R$ ${totSalH.toFixed(2)}\nTotal de salário das mulheres: R$ ${totSalM.toFixed(2)}`);
