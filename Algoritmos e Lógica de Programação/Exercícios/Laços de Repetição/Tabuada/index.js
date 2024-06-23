// Leia um número e exiba a tabuada desse número (de 1 a 10).

const num = parseInt(prompt("Informe o número que deseja verificar sua tabuada:"))

const ulElement = document.getElementById('multiplicationTable');

ulElement.style.listStyle = 'none';
ulElement.style.padding = '0';
ulElement.style.margin = '0';

for(i = 1; i <= 10; i++) {
    let result = num * i

    const liElement = document.createElement('li');

    liElement.textContent = `${num} x ${i} = ${result}`

    ulElement.appendChild(liElement);
}