/* 

Contexto: Você quer monitorar o tamanho da sua lista de links salvos para ler depois.

O Desafio:

1. Crie um array vazio chamado linksLeitura.

2. Adicione 3 links fictícios (strings) usando o .push().

3. Exiba no console: "Você tem [X] links para ler." (usando o .length).

4. Simule que você leu o primeiro link da lista, removendo-o com o método correto.

5. Use o conceito que vimos no conteúdo teórico para exibir no console apenas o último item que sobrou na lista de forma dinâmica (usando array[array.length - 1]).

*/

// Inicializa uma variável com um array vazio para armazenar a lista de leituras futuras
let linksLeitura = [];

// Define constantes contendo os títulos dos livros que serão adicionados
const link1 = "Descolonizando Afetos";
const link2 = "O Manifesto Comunista";
const link3 = "Hábitos Atômicos";

// Insere sequencialmente cada um dos títulos no final do array, aumentando seu tamanho para 3
linksLeitura.push(link1);
linksLeitura.push(link2);
linksLeitura.push(link3);

// Obtém a quantidade total de elementos via .length e exibe uma mensagem formatada no terminal
console.log("Você tem [" + linksLeitura.length + "] links para ler.");

// Remove o primeiro elemento do array (índice 0), deslocando os livros restantes para posições anteriores
linksLeitura.shift();

// Calcula dinamicamente o índice do último elemento (tamanho atual - 1) e o exibe no console
console.log(linksLeitura[linksLeitura.length - 1]);

