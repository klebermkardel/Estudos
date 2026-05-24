/*

O do...while do Despertador Persistente

Contexto: Seu despertador toca às 06h50, mas você ativa o "Modo Soneca". Ele precisa tocar pelo menos uma vez, e continuar tocando se o usuário não acordar, até um limite de 3 vezes.

O Desafio:

1. Crie uma variável let toques = 1.

2. Crie uma variável booleana let acordei = false.

3. Monte um do...while onde o bloco do exibe "BEEP! Despertador tocando pela [X]ª vez." e incrementa a variável toques.

4. A condição do while deve fazer o loop continuar se você não acordou (!acordei) E se os toques forem menores ou iguais a 3.

*/

// Inicializa o contador de ciclos do despertador na primeira execução
let toques = 1;

// Define a variável booleana de controle para monitorar o estado do usuário
let acordei = false;

// Executa o bloco de código obrigatoriamente antes de fazer a primeira checagem lógica
do {
    // Exibe no console o alerta sonoro formatado com o número da iteração atual
    console.log("BEEP! Despertador tocando pela " + toques + "ª vez.");
    
    // Incrementa o contador em 1 para preparar a próxima verificação
    toques++;

// O laço continua rodando ENQUANTO o usuário NÃO acordar (true) E o contador for menor ou igual a 3
} while (!acordei && toques <= 3);
