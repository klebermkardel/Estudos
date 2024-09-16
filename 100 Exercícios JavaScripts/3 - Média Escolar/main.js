// Escreva um programa que calcule a média aritmética de dois números.

function calcAverage() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const average = (num1 + num2) / 2;

    document.getElementById('average').textContent = `A média dos dois números é: ${average}`;
}

