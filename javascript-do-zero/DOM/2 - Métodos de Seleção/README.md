# Métodos principais para selecionar e manipular elementos.

1. `document.getElementById("id")`

Seleciona um único elemento com base no seu atributo `id`.

```html
<p id="paragrafo">Olá, mundo!</p>

<script>
    const p = document.getElementById("paragrafo");
    console.log(p.textContent); // Olá, mundo!
</script>
```

2. `document.getElementByClassName("classe")`

Seleciona **todos** os elementos com a classe especificada (retorna uma coleção).

```html
<div class="caixa">Item 1</div>
<div class="caixa">Item 2</div>

<script>
  const caixas = document.getElementsByClassName("caixa");
  console.log(caixas[0].textContent); // Item 1
</script>
```

3. `document.getElementByTagName("tag")`

Seleciona **todos** os elementos com a tag especificada, como `div`, `p`, `button`.

```html
<p>Primeiro</p>
<p>Segundo</p>

<script>
  const paragrafos = document.getElementsByTagName("p");
  console.log(paragrafos.length); // 2
</script>
```

4. `document.querySelector("seletor")`

Seleciona **apenas o primeiro elemento** que corresponde ao seletor CSS.

```html
<p class="destaque">Texto</p>

<script>
  const p = document.querySelector(".destaque");
  console.log(p.textContent); // Texto
</script>
```

5. `document.querySelectorAll("seletor")`

Seleciona **todos os elementos** que correspondem ao seletor CSS.

```html
<li>Item 1</li>
<li>Item 2</li>

<script>
  const itens = document.querySelectorAll("li");
  itens.forEach(item => console.log(item.textContent));
</script>
```

6. `element.textContent`

Usado para **pegar** ou **alterar** o texto de um elemento (sem HTML).


```html
<p id="mensagem">Olá!</p>

<script>
  const msg = document.getElementById("mensagem");
  msg.textContent = "Bem-vindo!"; // Substitui o conteúdo do parágrafo
</script>
```


7. `element.innerHTML
`
Usado para pegar ou inserir conteúdo HTML dentro de um elemento.


```html
<div id="container"></div>

<script>
  const div = document.getElementById("container");
  div.innerHTML = "<strong>Texto em negrito</strong>";
</script>
```
⚠️ Use com cuidado. Se estiver manipulando conteúdo vindo do usuário, pode abrir brechas de segurança (XSS).


8. `element.setAttribute("atributo", "valor")`

Define ou altera o valor de um atributo de um elemento HTML.

```html
<img id="foto" src="foto1.jpg">

<script>
  const imagem = document.getElementById("foto");
  imagem.setAttribute("src", "foto2.jpg");
</script>
```

9. `element.getAttribute("atributo")`

Retorna o valor de um atributo do elemento.

```html
<a id="link" href="https://google.com">Google</a>

<script>
  const a = document.getElementById("link");
  console.log(a.getAttribute("href")); // https://google.com
</script>

```

10. `element.classList`

Permite adicionar, remover, alternar ou verificar classes no elemento HTML.

````html
<div id="caixa" class="ativo"></div>

<script>
  const caixa = document.getElementById("caixa");

  caixa.classList.remove("ativo");      // Remove a classe
  caixa.classList.add("inativo");       // Adiciona uma nova
  caixa.classList.toggle("oculto");     // Alterna: adiciona se não tiver, remove se já tiver
  console.log(caixa.classList.contains("ativo")); // false
</script>
````