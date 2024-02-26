function convertTemperature() {
    // Pegando o valor da temperatura inserida pelo usuário e convertendo para um número decimal
    let temperature = parseFloat(document.getElementById("temperatureInput").value);
    // Obtendo o tipo de conversão selecionado pelo usuário (Celsius para Fahrenheit ou Fahrenheit para Celsius)
    let conversionType = document.getElementById("conversionType").value;
    // Selecionando o elemento onde o resultado será exibido
    let resultElement = document.getElementById("result");

    // Verificando se o valor da temperatura é válido (se é um número)
    if (isNaN(temperature)) {
        // Exibindo uma mensagem de erro se o valor da temperatura não for válido
        resultElement.textContent = "Por favor, insira uma temperatura válida.";
        // Mudando a cor do texto para vermelho para indicar um erro
        resultElement.style.color = "red";
        return; // Finalizando a função caso haja erro
    }

    let result;
    // Verificando o tipo de conversão selecionado pelo usuário e realizando a conversão apropriada
    if (conversionType === "celsiusToFahrenheit") {
        // Convertendo de Celsius para Fahrenheit usando a fórmula adequada
        result = (temperature * 9/5) + 32;
        // Exibindo o resultado formatado com as unidades de temperatura
        resultElement.textContent = temperature + "º C = " + result.toFixed(2) + "º F";
    } else if (conversionType === "fahrenheitToCelsius") {
        // Convertendo de Fahrenheit para Celsius usando a fórmula adequada
        result = (temperature - 32) * 5/9;
        // Exibindo o resultado formatado com as unidades de temperatura
        resultElement.textContent = temperature + " ºF = " + result.toFixed(2) + " ºC";
    }

    // Mudando a cor do texto do resultado para azul para indicar que não há erros
    resultElement.style.color = "#007bff";
}
