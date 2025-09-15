# Algoritmos Clássicos (Busca e Ordenação)

Pense nos algoritmos como "receitas" otimizadas para realizar tarefas comuns. Aprender a implementá-los é o "treino de musculação" do cérebro de um programador: desenvolve o raciocínio lógico, a atenção aos detalhes e a noção de eficiência.

Vamos começar com os algoritmos de **Busca**

## Parte 1: Algoritmos de Busca

O problema é simples: dado um array e um valor (o "alvo"), como encontramos se e onde esse alvo está no array?

**1. Busca Linear (Linear Search)**

Essa é a abordagem mais intuitiva e direta, a que um ser humano faria naturalmente.

* **A Teoria**: A Busca Linear percorre o array elemento por elemento, do início ao fim, comparando cada item com o valor alvo. Se encontrar uma correspondência, a busca para. Se chegar ao final do array sem encontrar nada, a busca falha.

* **Analogia**: Procurar um livro específico em uma estante totalmente bagunçada. Você não tem opção a não ser olhada cada livro, um por um, da esquerda para direita.

* **Quando Usar**: É a única opção quando a lista está **desordenada**. É simples de implementar para qualquer tipo de lista.

* **A Sintaxe (Implementação)**:

```js
/**
 * Procura por um 'alvo' em um 'array' usando Busca Linear
 * @param {Array} array - A lista de itens a ser pesquisada
 * @param {*} alvo - O valor que estamos procurando
 * @returns {number} - O índice do alvo se encontrado, ou -1 se não encontrado.
 */

function buscaLinear(array, alvo) {
    // Usamos um laço 'for' para visitar cada índice, do 0 ao último
    for (let i = 0; i < array.length; i++) {
        //  A cada iteração, comparamos o elemento atual com o alvo
        if (array[i] === alvo) {
            // Se encontrarmos, retornamos o índice atual e a função para.
        }
    }

    // Se o laço 'for' terminar sem nunca ter encontrado o alvo,
    // significa que ele não está na lista. Retornamos -1 por convenção.
    return -1; 
}
```

**2. Busca Binária (Binary Search)**

Esta é uma abordagem muito mais poderosa e rápida, mas com um pré-requisito crucial.

 * **O Pré-requisito**: A Busca Binária **SÓ FUNCIONA EM UM ARRAY ORDENADO**;
 
 * **A Teoria**: Em vez de olhar um por um, a Busca Binária usa uma estratégia de "dividir para conquistar".
    
    1. Olhe para o elemento do **meio** do array.
    2. Se ele for o seu alvo, você o encontrou!
    3. Se o seu alvo for **menor** que o elemento do meio, você pode **descartar toda a metade da direita** do array.
    4. Se o seu alvo for **maior** que o elemento do meio, você pode **descattar toda a metade esquerda** do array.

 * **Analogia**: Procurar uma palavra em um dicionário físico. Você não começa da primeira página. Você abre o dicionário no meio, vê se sua palavra vem antes ou depois, e descarta a metade inútil. Você repete isso, diminuindo drasticamente o número de páginas a serem olhadas a cada passo.

 * **Quando Usar**: Em listas **grandes e ordenadas** onde a performance é crítica.

 * **A Sintaxe (Implementação)**:

 ```js
/**
 * Procura por um 'alvo' em um 'array ORDENADO' usando a Busca Binária.
 * @param {Array} array - A lista ORDENADA de itens.
 * @param {*} alvo - O valor que estamos procurand.
 * @returns {number} - O índice do alvo se encontrado, ou -1 se não encontrado
*/

function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;

    // O laço continua enquanto nossa "janela de busca" for válida.
    while (inicio <= fim) {
        // Encontra o índice do meio
        const meio = Math.floor((inicio + fim) / 2);
        const chuve = array[meio];

        if (chute === alvo) {
            return meio; // Encontrou!
        } else if (chute < alvo) {
            // Se o chute for muito baixo, descarte a metade esquerda
            inicio = meio + 1;
        } else {
            // Se o chute for muito alto, descarte a metade direita]
            fim = meio - 1;
        }
    }
    // Se o laço 'while' terminar, o alvo não foi encontrado.
    return -1;
}
```