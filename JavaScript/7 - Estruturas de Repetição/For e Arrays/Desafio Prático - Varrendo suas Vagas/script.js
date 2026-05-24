/* 

O Desafio: Varrendo suas Vagas 💼
Vamos usar o array que você criou lá atrás.

1. Crie o array const vagas = ["Microsoft", "Google", "Apple", "Facebook"];

2. Monte um laço for configurado especificamente para rodar o tamanho exato desse array (usando i < vagas.length).

3. Dentro do bloco, exiba no console a mensagem: "Vaga disponível na empresa: " + vagas[i].

*/

// Inicializa um array contendo strings que representam as empresas com vagas disponíveis
const vagas = ["Microsoft", "Google", "Apple", "Facebook"];

// Configura o laço 'for': o índice 'i' começa em 0 (primeiro item da lista)
// e o loop continua rodando ENQUANTO 'i' for menor que o número total de itens (vagas.length)
for (let i = 0; i < vagas.length; i++) {
    // Usa o valor atual de 'i' para acessar dinamicamente a posição correspondente no array
    console.log("Vaga disponível na empresa: " + vagas[i]);
}