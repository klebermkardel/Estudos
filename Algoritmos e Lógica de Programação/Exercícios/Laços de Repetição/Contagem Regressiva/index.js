// Escreva um algoritmo que exiba uma contagem regressiva de 10 até 0.

const ulElement = document.getElementById('countdownList');

ulElement.style.listStyle = 'none';
ulElement.style.padding = '0';
ulElement.style.margin = '0';

for(i = 10; i >= 0; i--) {
    const liElement = document.createElement('li');

    liElement.textContent = i;

    ulElement.appendChild(liElement);
}