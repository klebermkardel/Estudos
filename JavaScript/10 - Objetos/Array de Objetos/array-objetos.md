# Array de Objetos: A Estrutura das APIs

Quando você consome dados de um banco ou de uma API (do Google, do LinkedIn, etc.), os dados quase sempre chegam como uma lista cheia de objetos dentro.

Imagine uma lista de vagas de emprego. Em vez de variáveis separadas, nós juntamos tudo em um array:

```js
const bancoDeVagas = [
    { empresa: "Google", cargo: "Dev Júnior", salario: 5000 },
    { empresa: "Netflix", cargo: "Dev Pleno", salario: 8500 },
    { empresa: "Amazon", cargo: "Dev Júnior", salario: 4800}
]
```

## Como navegar nessa estrutura?

Você juntas as regras de Array com as regras de Objeto. Primeiro acessa a posição do array ```[index]``` e depois a propriedade com o ponto ```.```:

```js
// Acessando o cargo da segunda vaga (Netflix)
console.log(bancoDeVagas[1].cargo) // Dev Pleno

// Usando High-Order Functions para filtrar apenas vagas Júnior
const vagasJunior = bancoDeVagas.filter(vaga => vaga.cargo === "Dev Júnior")
console.log(vagasJunior)
```