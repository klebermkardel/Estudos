# Métodos úteis de Arrays

Javascript oferece diversos métodos para manipular arrays. Aqui estão os mais usados.

Array original:

```js
const nomes = ["João", "Maria", "José", "Ana", "Gustavo"]
```

`.push()`: adiciona um item no final do array

```js
nomes.push("Lucas");
```

`.pop()`: Remove o último item do array

```js
nomes.pop();
```

`.unshift()`: Adiciona um item no início do array.

```js
nomes.unshift("Carlos");
```

`.shift()`: Remove o primeiro item do array.

```js
nomes.shift();
```

`.includes()`: Verifica se um valor existe no array

```js
console.log(nomes.includes("Ana")); // true ou false
```