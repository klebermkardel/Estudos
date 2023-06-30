# Novas Funcionalidades do HTML5

Agoravamos explorar algumas das novas funcionalidades que o HTML5 trouxe, incluindo novas tags e recursos.

## Tag `<details>`

A tag `<details>` permite criar menus e informações que podem ficar ocultas ou serem exibidas. No exemplo abaixo, temos um rótulo HTML que, ao ser clicado, expande e mostra uma informação que estava oculta. Para implementar esse tipo de funcionalidade no HTML, utilizamos duas tags.

Primeiro, a tag `<details>`, onde especificamos onde começa e termina o bloco de informações ocultas ou exibidas. Dentro da tag `<details>`, especificamos o item que será clicável usando a tag `<summary>`. O título especificado dentro do `<summary>` será sempre visível. Após o `<summary>`, podemos adicionar qualquer código HTML que será oculto ou exibido dependendo do clique no `<summary>`.

Exemplo de código para a tag `<details>`:

```html
<details>
  <summary>Título Visível</summary>
  <p>Informação oculta ou exibida.</p>
</details>
```

## Barras de Progresso
O HTML5 introduziu dois tipos de barras de progresso.

### Tag `<meter>`

A tag `<meter>` permite definir o valor mínimo, o valor máximo e o valor atual de uma barra de progresso. No exemplo abaixo, definimos que a barra de progresso terá um valor entre 0 e 100 e está marcada em 91, representando 91% do progresso. É possível estilizar a barra de progresso usando CSS.

Exemplo de código para a tag `<meter>`:

```html
<meter min="0" max="100" value="91">91%</meter>
```

### Tag `<progress>`

A tag `<progress>` é usada para criar uma barra de carregamento animada, simulando o progresso do carregamento de uma página ou elemento. A animação é controlada pelo navegador. Basta adicionar a tag `<progress>` em seu código HTML e o navegador cuidará do restante.

Exemplo de código para a tag `<progress>`:

```html
<progress></progress>
```

## Conclusão

Com o HTML5, temos acesso a várias novas funcionalidades que melhoram a experiência do usuário em páginas da web. A tag `<details>` nos permite criar menus expansíveis e ocultar informações. Já as barras de progresso, implementadas com as tags `<meter>` e `<progress>`, nos permitem exibir visualmente o progresso de uma ação ou carregamento.

Explore essas funcionalidades e aproveite ao máximo o poder do HTML5 em seus projetos web!