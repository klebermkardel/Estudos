/*

Desafio Prático Nº 1 (Seu primeiro Loop)
Abra o seu arquivo script.js no VS Code e faça o seguinte exercício:

Crie um loop while.

Faça ele simular uma contagem regressiva para o despertador tocar às 06h50.

Comece uma variável chamada segundos valendo 5.

O loop deve rodar enquanto os segundos forem maiores que zero (> 0).

Dentro do loop, mostre os segundos no console e faça a variável diminuir de 1 em 1 (Dica: para diminuir, usamos segundos--).

Fora do loop, coloque um console.log("BEEP BEEP! Hora de acordar!");.

*/

// Inicializa uma variável mutável para servir de contador na contagem regressiva
let segundos = 5;

// Executa o bloco de código repetidamente ENQUANTO o valor da variável 'segundos' for maior que zero
while (segundos > 0) {
    // Exibe no console o tempo formatado concatenando a string com o valor atual do contador
    console.log("00:00:0" + segundos);

    // Decrementa o valor da variável em 1 a cada volta (o mesmo que segundos = segundos - 1)
    segundos--;
}

// Executa esta linha apenas após a condição do 'while' se tornar falsa e o loop ser encerrado
console.log("BEEP BEEP! São 06h50! Hora de acordar!");