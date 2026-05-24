/*

Desafio Prático: O Placar dos Pontos
Para você ver o for rodando no seu terminal, vamos criar um script bem simples, mas que exige atenção nos limites.

O que você deve fazer no seu VS Code:

1. Crie uma estrutura for.

2. Faça a contagem começar em 0 (let i = 0).

3. A condição deve permitir que o loop rode enquanto o contador for menor ou igual a 10 (<= 10).

4. O detalhe: Em vez de subir de 1 em 1, faça o contador subir de 2 em 2 (Dica: para somar de dois em dois, use i += 2 no lugar do i++).

5. Dentro do bloco, exiba o valor atual de i no console com a mensagem: "Pontuação: " + i.

*/

// Inicializa o laço 'for': define a largada em 0, a condição de parada até 10 (inclusive) 
// e o passo de incremento de 2 em 2 (i += 2)
for (let i = 0; i <= 10; i += 2) {
    // Exibe no console a string concatenada com o valor numérico atual do contador 'i'
    console.log("Pontuação: " + i);
}