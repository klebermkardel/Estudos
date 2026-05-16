/*

Desafio: Sua Lista de Candidaturas

Tente fazer isso no seu console agora para sentir como funciona:

1. Crie um array chamado vagasCandidatadas com 3 nomes de empresas onde você gostaria de trabalhar.

2. Adicione uma 4ª empresa usando o .push().

3. Exiba no console apenas a segunda empresa da lista (lembre-se do índice!).

4. Use o .length para exibir uma mensagem: "Eu já me candidatei a [X] vagas".

*/

// Define um array inicial contendo 3 strings representando as empresas
const vagasCandidatadas = ["Microsoft", "Google", "Apple"];

// Insere a string "Facebook" na última posição do array, alterando o tamanho dele para 4
vagasCandidatadas.push("Facebook");

// Acessa e exibe o elemento no índice 1 (o segundo item da lista: "Google")
console.log(vagasCandidatadas[1]); // "Google"

// Calcula o tamanho atual do array via .length e exibe uma mensagem concatenada no console
console.log("Eu já me candidatei a " + vagasCandidatadas.length + " vagas"); // "Eu já me candidatei a 4 vagas"

/*
Desafio Extra de Arrays:

Tente fazer o seguinte no seu código:

1. Use o .indexOf() para descobrir em qual posição está o "Facebook" e guarde isso numa constante.

2. Use essa constante dentro do .splice() para remover o Facebook da sua lista.

3. Adicione o seu esporte, "Basquete", na primeira posição da lista (índice 0) sem apagar o que já está lá (Dica: use o método .unshift()).
*/

// Procura o texto exatamente igual a "Facebook" dentro do array e armazena seu índice numérico (3) na constante
const vagaCancelada = vagasCandidatadas.indexOf("Facebook");

// Altera o array removendo 1 elemento a partir da posição guardada na constante 'vagaCancelada'
vagasCandidatadas.splice(vagaCancelada, 1);

// Insere a string "Basquete" no índice 0, reorganizando e empurrando todos os outros itens para as próximas posições
vagasCandidatadas.unshift("Basquete");

// Exibe o estado final do array modificado para validação no terminal
console.log(vagasCandidatadas);