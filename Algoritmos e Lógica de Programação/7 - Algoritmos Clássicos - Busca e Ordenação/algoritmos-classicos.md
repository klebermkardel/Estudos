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

## Parte 2 - Ordenação

**O Problema**: Dado um array de itens (números, strings, etc.) em ordem aleatória, como podemos rearranjá-lo para que fique em ordem crescente ou decrescente?

**Por que isso é importante?**

Lembra que a Busca Binária, o algoritmo suér rápido, só funciona em um array **ordenado**? A ordenação é a etapa de preparação que "destrava" o poder de algoritmos mais eficientes como esse. Além disso, dados ordenados são muito mais fáceis para humanos lerem e para programas processarem.

Vamos começar com o algoritmo de ordenação mais famoso para iniciantes.

**1. Bubble Sort (Ordenação por Bolha)**

Este é o algoritmo mais intuitivo. Embora não seja o mais eficiente, ele é perfeito para entender a lógica fundamental por trás da ordenação.

* **A Teoria**: O Bubble Sort funciona comparando pares de elementos adjacentes (lado a lado) e os trocando de lugar se estiverem na ordem errada. Ele repete esse processo várias vezes, "borbulhando" os maiores elementos para o final do array, como bolhas subindo na água.

* **Analogia**: Imagine uma fila de pessoas de alturas diferentes. O algoritmo olha para as duas primeiras pessoas. Se a da frente for mais alta, elas trocam de lugar. Depois ele olha para a segunda e a terceira e faz a mesma coisa. Ele repete isso até o final da fila. Ao final da primeira passagem, a pessoa mais alta de todas estará garantidamente no final da fila. Agora, ele repete todo o processo de novo, mas só até a penúltima posição, e assim por diante.

* **A Sintaxe (Implementação)**: Para implementar isso, precisamos de **laços aninhados** (um ```for```dentro de outro ```for```).

Vamos usar um exemplo para ficar mais claro. Imagine nosso array com 5 números (```n = 5```): ```[5, 3, 8, 4, 2]```
 
 * O **laço externo**: ```for (let i = 0; i < n - 1; i++)```

  **O que ele faz?** O laço externo **quantas passagens completas** nós faremos sobre o array. Ele não compara os números, ele apenas garante que o processo de comparação (o laço interno) se repita a quantidade certa de vezes.

  Por que ```n -1```?

  Pense na nossa fila de 5 pessoas. Para garantir que todos estejam em ordem, quantas pessoas precisamos colocar no lugar certo?

   * Depois da 1ª passagem, a pessoa mais alta estará no lugar certo.

   * Depois da 2ª, a segunda pessoa mais alta estará no lugar certo.

   * Depois da 3ª, a terceira mais alta...

  Se as 4 pessoas mais altas já estão no seus lugares corretos, a 5ª pessoa (a mais baixa) **automaticamente** já estará no lugar certo, no início da fila. Não precisamos fazer uma passagem para ela.

  Por tanto, para um array de ```n```elementos, precisamos de no máximo ```n - 1``` passagens para garantir que ele esteja totalmente ordenado.

  O laço ```for (let i = 0; i < n - 1; i++)``` executa o bloco de código exatamente ```n - 1``` vezes (para ```i``` indo de ```0``` até ```n-2```).

 
 * O **laço interno**: ```for (let j = 0; j < n - 1 - i; j++)```

 **O que ele faz?** O laço interno é o "trabalhador braçal". É ele quem percorre o array, compara os elementos adjacentes (```array[j]``` com ```array[j + 1]```) e faz as trocas.

 Essa condição é uma combinação de duas lógicas:

 **Parte A: Por que ```n - 1```?**

 O laço compara ```array[j]``` com ```array[j + 1]```. Se o laço fosse até o último índice (```n-1```), na última volta, ```j``` seria ```n```. Tentar acessar ```array[n]``` causaria um erro, pois essa posição não existe (os índices vão de 0 a ```n-1```).

 Portanto, a última comparação que podemos fazer é entre o penúltimo e o último elemento. O ```n - 1``` garante que o laço pare no ponto certo para evitar esse erro.

 **Parte B: Porque ```- i ```? (A Otimização Inteligente)**

 Esta é a parte mais genial do Bubble Sort.

  * **Após a 1º passagem completa (```i = 0```**: O **maior** número de todos os elementos no nosso exemplo (```8```) já "afundou" para a sua posição final e correta. Não precisamos mais compará-lo. Ele já está ordenado. ```[3, 5, 4, 2, **8**]```

  * **Após a 2ª passagem completa (```i = 1```)**: O **segundo maior** elemento (```5```) já "afundou" para a sua posição correta. Agora os dois últimos elementos estão ordenados. [```3, 4, 2, **5, 8**]

 O ```- i``` serve para **encurtar o laço interno a cada passagem**. Ele diz ao programa "Ei, não perca tempo comparando os elementos no final do array, porque eles já está ordenados!";

 **Vamos ver na prática (```n = 5```)**:

  * **Quando ```i = 1``` (2ª passagem)**: O laço interno vai até ```j < 5 - 1 - 1```, ou seja, ```j < 3```.

  * **Quando ```i = 2``` (3ª passagem)**: O laço interno vai até ```j < 5 - 1 - 2```, ou seja, ```j < 2```.

**Resumo**


 * ```i < n - 1``` **(Laço Externo)**: "Quantas passagens completas precisamos fazer?" Resposta: ```n-1``` são suficientes.

 * ```j < n - 1 - i``` **(Laço Interno)**: "Até onde precisamos ir comparando nesta passagem específica?" Resposta: ```n-1``` (para evitar erro) ```- i``` (para ignorar os itens que já foram ordenados no final).

 ```js
 /**
  * Ordena um array de números em ordem crescente usando o algoritmo Bubble Sort.
  * @param {Array<number>} array - O array de números a ser ordenado.
  */
 
 function bubbleSort(array) {
    const n = array.length;

    //Laço externo: controla as passagens
    for (let i = 0; i < n - 1; i++>) {
        //Laço interno: faz as comparações e trocas
        for (let j = 0; j < n - 1 - i; j++) {
            // Compara o elemento atual com o próximo
            if (array[j] > array[j + 1]) {
                // Se estiverem fora de ordem, troca-os de lugar
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    // O array original foi modificado, não precisamos retornar nada
 } 
 ```

 **A Troca de Variáveis (Swap)**: A parte ```const temp = ...``` é a forma clássica de trocar os valores de duas variáveis. Pense nisso como ter dois copos, um com água e outro com suco, e precisar de um copo vazio (```temp```) para conseguir trocar os líquidos de lugar.

