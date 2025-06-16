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