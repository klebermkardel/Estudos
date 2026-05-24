/*

O Cenário do Desafio: Conexão ao Servidor
Imagine que o seu script vai tentar se conectar a um servidor de vagas. O sistema deve tentar se conectar pelo menos uma vez. Se a conexão falhar, ele tenta de novo, até atingir o limite máximo de 3 tentativas.

O que você deve fazer:

1. Crie uma variável mutável chamada tentativas começando em 1.

2. Crie uma variável booleana chamada conexaoSucesso valendo false (simulando que o servidor está fora do ar).

3. Monte a estrutura do do...while.

Dentro do bloco do:

    - Dê um console.log("Tentando conectar... Tentativa " + tentativas);

    - Suba o número de tentativas de 1 em 1 (tentativas++).

Na condição do while (no final):

    - O loop deve continuar rodando enquanto conexaoSucesso for igual a false E tentativas for menor ou igual a 3.

    - Dica de sintaxe para a condição: (!conexaoSucesso && tentativas <= 3)

*/

// Inicializa o contador de tentativas de conexão começando na primeira tentativa
let tentativas = 1;

// Define o estado inicial da conexão como falso (simulando um servidor offline)
let conexaoSucesso = false;

// Inicia o bloco 'do...while', garantindo que o código interno rode pelo menos uma vez
do {
    // Exibe no console a tentativa atual antes de testar qualquer condição
    console.log("Tentanto conectar... Tentativa " + tentativas);

    // Incrementa o contador em 1 para preparar a próxima verificação ou tentativa
    tentativas++;

// O loop continuará rodando ENQUANTO a conexão NÃO for bem-sucedida E o número de tentativas for menor ou igual a 3
} while (!conexaoSucesso && tentativas <= 3);

// Se o loop terminou e o contador passou de 3, significa que todas as tentativas falharam
if (tentativas > 3) {
    // Exibe a mensagem de erro final para o usuário
    console.log("Falha na conexão com o servidor");
}