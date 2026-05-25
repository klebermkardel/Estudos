# Métodos Avançados de Array

Você acabou de destrancar a última chave que precisava. Agora que você domina **Loops, Arrays e Arrow Functions**, você tem toda a base necessária para ver as ferramentas mais poderosas do JavaScript Moderno: os métodos ```.map()```, ```.filter()```, ```.forEach``` e ```.reduce()```.

Eles servem para substituider os laços ```for``` usando justamente Arrow Functions dentro deles para processar listar em uma única linha.

Como você já domina as **Arrow Functions**, esses métodos vão parecer mágicos. Em vez de escrevermos estruturas ```for``` gigantes com ```if``` dentro para filtrar ou somar dados, vamos delegar isso para métodos especialistas.

1. O ```.forEach()``` (O Substituto do ```for```)

O ```.forEach()``` serve puramente para **passar por cada item do array** e executar uma ação (como um ```console.log```). Ele não altera a lista e não devolve nada, apenas "olha" item por item.

    - Analogia: Olhar para cada par de tênis no seu armário e dizer a cor dele em voz alta.

```js
const empresas = ["Google", "Amazon", "Apple"]

// Ele recebe uma arrow function. O parâmetro 'empresa' vira cada item da lista automaticamente
empresas.forEach(empresa => console.log("Empresa: " + empresa))
```

2. O ```.map()``` (O Transformador)

O ```.map()``` passa por todos os itens da lista, aplica uma transformação em cada um e **devolve um array novo do mesmo tamanho,** com os dados modificados.

    - Analogia: Pegar uma lista de preços em dólar e transformar tudo para real. A quantidade de itens é a mesma, mas os valores mudaram.

```js
const arremessos = [2, 3, 2]

// Transforma cada número multiplicando por 10
const pontosMultiplicados = arremessos.map(pontos => pontos * 10)

console.log(pontosMultiplicados) // [20, 30, 20]
```

3. O ```.filter()``` (O Segurança)

O ```.filter()``` roda uma checagem (verdadeiro ou falso) em cada item da lista. Se a condição for verdadeira, o item entra no novo array. Se for falsa, fica de fora. Ele **devolve um array filtrado** geralmente menor que o item original.

    - Analogia: Filtrar as vagas do seu e-mail para ver apenas as que pagam acima de um valor X.

```js
const pontosTreino = [0, 3, 0, 2, 0]

// Filtra e mantém apenas os números maiores que zero (ou seja, apenas os arremessos certos)
const apenasAcertos = pontosTreino.filter(ponto => ponto > 0)

console.log(apenasAcertos) // [3, 2]
```

4.  O ```.reduce()``` (O Acumulador)

O ```.reduce()``` é o método mais complexo, mas é o mais poderoso. Ele serve para pegar uma lista inteira de valores e **reduzir tudo a um único resultado** (como a soma total de pontos do seu treino).

Ele usa dois parâmetros principais na Arrow Function:

    1. ```acumulador```: a variável que guarda a soma (igual ao seu ```let totalPontos = 0``` de antes).
    2. ```valorAtual```: o item da lista que ele está lendo naquele segundo.
    3. No final do método, passamos o **valor inicial** do acumulador (geralmente ```0```).
    
    - Analogia: Passar as compras no caixa do mercado. O painel começa em R$ 0,00 (```valor inicial```) e vai somando cada produto (```valor atual```) até dar o preço final (```acumulador```).

```js
const pontosDoJogo = [2, 3, 2, 2, 3]

// Reduz o array somando o acumulador com o valor atual, começando do zero
const placarFinal = pontosDoJogo((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(placarFinal) // 12
```