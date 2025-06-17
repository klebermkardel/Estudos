# O que é o DOM?

O **DOM** é uma representação em forma de árvore de tudo que está escrito no seu HTML. Ele transforma os elementos da página (como `div`, `h1`, `p`, `button`) em objetos JavaScript, permitindo que você **acesse**, **leia**, **edite** ou **delete** esses elementos usando código JS.

## Como funciona?

Pense que seu HTML é isso aqui:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
    <p>Esse é um parágrafo.</p>
  </body>
</html>
```

Internamente, o navegador transforma isso numa árvore de objetos, assim:

```css
document
├── html
│   ├── head
│   │   └── title
│   └── body
│       ├── h1
│       └── p
```

Cada "ramo" dessa árvore é um **nó** (node), e cada nó representa um elemento da página.

## O que você pode fazer com o DOM?

Usando JavaScript, você pode:

* **Selecionar** elementos: ver ou guardar algo da página.
* **Modificar** conteúdo: trocas textos, atributos, estilos, etc.
* **Remover** elementos existentes;
* **Responder a eventos**, como cliques e digitação.

## Exemplo prático:

Dado esse HTML:

```html
<h1 id="titulo">Bem-vindo</h1>
```

Você pode fazer o seguinte com o JavaScript:

```javascript
const titulo = document.getElementById("titulo"); // seleciona o h1
titulo.textContent = "Olá, Kleber!"; // muda o texto do h1
titulo.style.color = "blue"; // altera a cor do texto
```

Você não tocou no HTML, mas a página mudou porque o DOM foi manipulado.

# O DOM é dividido em:

| Parte            | Explicação                                                                         |
| ---------------- | ---------------------------------------------------------------------------------- |
| **document**     | Representa toda a página HTML. É o ponto de entrada.                               |
| **nós (nodes)**  | Cada elemento HTML é um nó. Ex: `body`, `div`, `h1`.                               |
| **propriedades** | Atributos que você pode acessar. Ex: `textContent`, `style`, `innerHTML`.          |
| **métodos**      | Ações que você pode executar. Ex: `getElementById()`, `appendChild()`, `remove()`. |

## Resumo rápido

* O **DOM** é a "ponte" entre o HTML e o JavaScript.

* Ele representa a página como objetos manipuláveis.

** Você pode **acessar**, **alterar**, **criar** e **remover** partes da página dinamicamente.

** É através do DOM que você **faz sua página interagir com o usuário**.