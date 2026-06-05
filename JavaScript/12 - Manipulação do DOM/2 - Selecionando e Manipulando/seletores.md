# Como o JavaScript encontra os elementos (Seletores)

Antes de alterar um elemento na tela (como um botão), o JavaScript precisa "achar" esse elemento. O método moderno mais utilizado para isso no mercado é o ```document.querySelector()```.

Imagine que temos o seguinte HTML:

```HTML
<h1 id="titulo-principal">Navegador Pronto</h1>
<button class="btn-enviar">Disparar Lazer</button>
```

Para o JavaScript capturar esses elementos para dentro do código, fazemos assim:

```js
// Buscando pela ID (usa a hashtag # igual no CSS)
const titulo = document.querySelector("#titulo-principal")

// Buscando pela Classe (usa o ponto . igual no CSS)
const botao = document.querySelector(".btn-enviar")
```

## Alterando Conteúdo e Estilo

Depois que guardamos o elemento dentro de uma constante, podemos manipulá-lo livremente.

```js
// Alterando o texto dentro do H1
titulo.innerText = "Sistemas Orbitais Ativados!"

// Alterando o CSS direto pelo JavaScript
titulo.style.color = "cyan"
titulo.style.fontSize = "32px"
```

## Ouvindo o Usuário (Eventos)

A mágica acontece quando o código reage ao que o usuário faz. Para isso, usamos o ```addEventListener``` (Ouvinte de Evento). Nós dizemos qual evento queremos ouvir (como um `click`) e passamos uma função com o que deve acontecer.

```js
// Cria a função com a ação
const dispararLazer = () => {
    console.log("Lazer disparado com sucesso!)
    titulo.innerText = "Fogo lançado!"
    titulo.style.color = "red"
}

// Diz para o botão ouvir o clique e chamar a função
botao.addEventListener("click", dispararLazer)
```

