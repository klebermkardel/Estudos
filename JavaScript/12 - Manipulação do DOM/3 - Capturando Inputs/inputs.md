# Capturando Inputs (Formulários)

Agora que já sabemos como clicar em um botão e alterar um texto, o próximo passo essencial de mercado é **captura o que o usuário digita** dentro de um campo de texto (```<input>```).

**Imagine o cenário**: o usuário digita o nome dele em um campo, clica no botão, e o site o cumprimenta de forma personalizada.

```HTML
<input type="text" class="campo-nome" placeholder="Digite seu nome">
```

No JavaScript nós pegaríamos o texto digitado assim:

```js
const inputNome = document.querySelector(".campo-nome")

// Dentro da função do botão, capturamos o texto atual do campo
const nomeUsuario = inputNome.value
```

