function calculaImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificaImc(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

(function () {
    const peso = 75;
    const altura = 1.75;
    const imc = calculaImc(peso, altura);
    console.log(classificaImc(imc));
})();

