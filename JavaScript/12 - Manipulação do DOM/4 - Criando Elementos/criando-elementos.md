# Criando Elementos do Zero

Agora já sabemos alterar coisas **que já existem** no HTML. Mas se o usuário criar algo novo na tela? (Como adicionar uma tarefa em uma lista de afazares, ou colocar um produto no carrinho de compras).

Para fazer o JavaScript fabricar um elemento HTML do absoluto zero e injetá-lo na página, nós usamos dois métodos novos:

1. ```document.createElement('tag')```: Fabrica a tag na memória do JavaScript (ex: ```const novoItem = document.createElement('li')```)

2. ```.appendChild(elemento)```: Pega a tag que foi fabricada e a "gruda" dentro de uma tag mãe que já existe no HTML.

## Exemplo Visual de Lógica:

```HTML
<ul class="lista-tarefas"></ul>
```

No JavaScript, nós criamos e adicionamos um item nela assim:

```js
const lista = document.querySelector(".lista-tarefas")

// 1. Fabrica a tag <li> na memória
const novaLi = document.createElement("li")

// 2. Coloca teto dentro dela
novaLi.innerText = "Estudar JavaScript"

// 3. Gruda a <li> dentro da <ul> na tela do usuário
lista.appendChild(novaLi)
```

