// Crie um programa que calcule e exiba a média aritmética de três notas informadas pelo usuário.

function calcSchoolAverage() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    const schoolAverage = (num1 + num2 + num3 + num4) / 4;

    document.getElementById('schoolAverage').textContent = `A média desse aluno é: ${schoolAverage}`;
}

