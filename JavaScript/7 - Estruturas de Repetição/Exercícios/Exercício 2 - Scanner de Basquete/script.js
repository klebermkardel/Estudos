/*

O Scanner de Basquete (for + if/else)

Contexto: Você está registrando a pontuação de uma sequência de 5 arremessos. Cada número no array representa os pontos daquele arremesso (0 para erro, 2 ou 3 para acerto).

O Desafio:

1. Crie o array const lances = [2, 0, 3, 0, 2].

2. Use um laço for para varrer esses lances.

3. Dentro do loop, faça uma estrutura condicional: se o ponto for maior que 0, exiba "Cesta de [X] pontos!". Se for 0, exiba "Errou o arremesso.".

*/

// Inicializa uma lista contendo os pontos obtidos em cada tentativa de arremesso
const lances = [2, 0, 3, 0, 2];

// Executa um laço para iterar por todos os índices do array 'lances'
for (let i = 0; i < lances.length; i++) {
    // Verifica se a pontuação obtida no arremesso atual é maior que zero (houve acerto)
    if (lances[i] > 0) {
        // Exibe a mensagem de sucesso com a pontuação dinâmica convertida em string
        console.log("Cesta de " + lances[i] + " pontos!");
    } else {
        // Trata o caso alternativo (pontuação igual a 0), exibindo a mensagem de erro
        console.log("Errou o arremesso");
    }
}