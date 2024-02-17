// Função para verificar se um número é primo utilizando o Crivo de Eratóstenes
function checkPrime() {
    var num = parseInt(document.getElementById("numberInput").value);
    if (isNaN(num)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    if (num <= 1) {
        document.getElementById("result").innerText = num + " não é primo.";
        return;
    }

    // Criando um array para marcar os números compostos
    var sieve = [];
    for (var i = 0; i <= num; i++) {
        sieve.push(true);
    }
    sieve[0] = sieve[1] = false; // 0 e 1 não são primos

    // Marcando os números compostos
    for (var i = 2; i * i <= num; i++) {
        if (sieve[i]) {
            for (var j = i * i; j <= num; j += i) {
                sieve[j] = false;
            }
        }
    }

    // Verificando se o número é primo ou não com base no array sieve
    if (sieve[num]) {
        document.getElementById("result").innerText = num + " é primo.";
    } else {
        document.getElementById("result").innerText = num + " não é primo.";
    }
}