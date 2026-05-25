# Arrays

Os **Arrays** (ou Vetores) são fundamentais. Até agora, cada variável sua era como uma caixa que guardava apenas um objeto (um nome, um número, um booleano).

Um **Array** é como uma **estante organizada**: uma única variável que consegue guardar múltiplos valores de uma vez, mantendo-os em ordem.

1. Como criar um Array

Usamos colchetes ```[]``` e separamos os itens por vírgulas.

```js
// Uma lista de treinos de basquete
const treinos = ["Arremesso", "Drible", "Defesa", "Rebote"]

// Uma lista de números (pontuações do dia)
const notas = [10, 8, 5, 9]
```

2. O conceito de Índice (A contagem começa no ZERO)

Esta é a regra de ouro: na programação, o primeiro item de uma lista não está na posição 1,mas sim na posição 0.

    * Posição 0: "Arremesso"
    * Posição 1: "Drible"
    * Posição 2: "Defesa"

3. Acessando itens da "Estante"

Para pegar um valor específico, usamos o nome do array seguido do índice entre colchetes:

```js
const treinos = ["Arremesso", "Drible", "Defesa", "Rebote"]

console.log(treinos[0]) // Exibe "Arremesso"
console.log(treinos[2]) // Exibe "Defesa"
``` 

4. Modificando um item

Você pode mudar o conteúdo de uma posição específica, mesmo se o array for uma ```const``` (porque você não está mudando a "estante", apenas o "objeto" que está dentro dela):

```js
const treinos = ["Arremesso", "Drible", "Defesa", "Rebote"]
treinos[1] = "Ponte Aérea"

console.log(treinos) // ["Arremesso", "Ponte Aérea", "Defesa", "Rebote"] 
```

5. Propriedades e Métodos Básicos

Os Arrays no JavaScript vêm com "ferramentas" embutidas para facilitar nossa vida:

* ```.length```: Diz quants itens existem no array.
* ```.push()```: Adiciona um item ao final da lista.
* ```.pop()```: Remove o último item da lista.
* ```.unshift()```: Adiciona um item no início.
* ```.shift()```: Remove o primeiro item.

    ```js
    const vagas = ["Desenvolvedor Júnior", "Estágio Tech"]
    vagas.push("Analista de Sistemas") // Adicionou no fim
    console.log(vagas.length) // Exibe 3
    ```
6. Por queos Arrays são tão poderosos?

Imagime que, em vez de 4 vagas, você tivesse 500. Se fossem variáveis individuais (```vaga1```, ```vaga2```...), seria impossível gerenciar. Com o Array, você tem um **contêiner único**.

Agora, vamos subir o nível. Existem dois métodos muito usados para "limpar" ou organizar seus dados.

* ```.indexOf()```: Serve para descobrir em qual posição (índice) um item específico está. Se ele não encontra nada, retorna -1.

* ```.splice()```: É a "faca suiça" dos arrays. Ele serve para remover, substituir ou adicionar itens em qualquer lugar da lista (não só no fim ou no começo).

## Exemplo de ```.splice()```

Se você desistiu da vaga na Apple (índice 2 do seu Array no desafio) e quer removê-la da lista:

```js
const vagasCandidatadas = ["Microsoft", "Google", "Apple", "Facebook"]

// O primeiro número é o índice onde começa, o segundo é quantos itens remover
vagasCandidatadas.splice(2, 1)
console.log(vagasCandidatadas) // ["Microsoft", "Google", "Facebook"]
```