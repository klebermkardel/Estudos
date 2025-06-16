# Mais métodos úteis em array

## `map()`: transforma os itens do array

Cria um novo array com os resultados de uma função aplicada em cada item

### Exemplo:

```js
const numeros = [1, 2, 3, 4, 5];

// Cria um novo array com o dobro de cada número
const dobrados = numeros.map((n) => n *2); 
console.log(dobrados) // [2, 4, 6, 8, 10]
```

## `filter()`: filtra os itens do array

Retorna um novo array apenas com os itens que passam em uma condição

### Exemplo:

```js
const idades = [15, 22, 17, 30, 12]

// Filtra quem é maior de idade (18+)
const maiores = idades.filter((idade) => idade >= 18)

console.log(maiores) // [22, 30]
```

## `find()`: encontra o primeiro item que atende à condição

Retorna apenas um item, ou `undefined` se nenhum atender.

### Exemplo:

```js
const nomes = ["João", "Maria", "José", "Ana", "Gustavo"]

// Encontra o primeiro nome com mais de 4 letras
const nomeGrande = nomes.find((nome) => nome.length > 4);

console.log(nomeGrande) // Maria
```

## `reduce()`: Reduz todos os elementos de um array para um único valor

O `reduce()` pega todos os elementos de um array e reduz para um único valor (como somar, multiplicar, concatenar, etc)

### Exemplo simples - somando os números de um array:

```js
const numeros = [10, 20, 30];

const total = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(total); // 60
```

### Como funciona o `reduce`?

```js
reduce((acumulador, valorAtual) => {}, valorInicial)
```

* `acumulador`: guarda o valor acumulado da operação
* `valorAtual`: é o item atual do array
* `valorInicial`: é o valor inicial do acumulador

No exemplo acima:

1. Começa com 0

2. 0 + 10 → 10

3. 10 + 20 → 30

4. 30 + 30 → 60

Usos comuns de `reduce()`:

* Somar valores numéricos
* Contar elementos
* Agrupar dados
* Criar relatórios ou transformações mais complexas

## `join()`: Transforma o array em uma string

O método `join()` transforma um array em uma string, colocando entre os elementos um separador que você escolher (por padrão, ele usa uma vírgula).

### Exemplo básico:

```js
const frutas = ["Maçã", "Banana", "Uva"];

const resultado = frutas.join(" - ");

console.log(resultado); // "Maçã - Banana - Uva"
```

### Como funciona internamente: 

* Ele não modifica o array original.

* Apenas cria uma string nova com os elementos unidos pelo separador.

### Usos comuns:

* Exibir listas de itens formatadas

* Criar frases ou relatórios

* Gerar textos a partir de arrays