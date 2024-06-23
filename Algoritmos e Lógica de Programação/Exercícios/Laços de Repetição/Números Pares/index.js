// Exiba todos os números pares de 1 a 100.

const ulElement = document.getElementById('numbers');

ulElement.style.listStyle = 'none';
ulElement.style.padding = '0';
ulElement.style.margin = '0';

for(i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        const liElement = document.createElement('li');

        liElement.textContent = i;

        ulElement.appendChild(liElement)
    }
}