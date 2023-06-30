# README.md

Este é um documento README.md que fornece informações sobre os diferentes tipos de listas em HTML.

## Listas em HTML

Existem três tipos de listas em HTML: listas ordenadas, listas não ordenadas e listas de definição. Cada tipo de lista é utilizado para organizar e apresentar informações de maneira específica.

### Listas Ordenadas

Em uma lista ordenada, os itens são numerados sequencialmente, começando pelo número 1. Cada item é representado pela tag `<li>` (item de lista) dentro da tag `<ol>` (lista ordenada).

Exemplo de uma lista ordenada:

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

Nesse exemplo, os itens serão apresentados na seguinte ordem:

1. Item 1
2. Item 2
3. Item 3

### Listas Não Ordenadas

Em uma lista não ordenada, os itens são apresentados sem uma numeração específica e são organizados com marcadores, como círculos ou pontos. Os itens são representados pela tag `<li>` dentro da tag `<ul>` (lista não ordenada).

Exemplo de uma lista não ordenada:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Nesse exemplo, os itens serão apresentados com marcadores, como bolinhas pretas:

- Item 1
- Item 2
- Item 3

### Listas de Definição

As listas de definição são utilizadas para descrever termos ou conceitos, onde cada item principal possui uma descrição associada. Essas listas são definidas pela tag `<dl>` (lista de definição), que contém as tags `<dt>` (termo) e `<dd>` (descrição).

Exemplo de uma lista de definição:

```html
<dl>
  <dt>Café</dt>
  <dd>Preto</dd>
  <dd>Quente</dd>

  <dt>Leite</dt>
  <dd>Branco</dd>
</dl>
```

Nesse exemplo, temos duas definições: uma para o termo "Café" e outra para o termo "Leite". Cada termo é seguido por suas respectivas descrições.

- Café
  - Preto
  - Quente

- Leite
  - Branco

## Exemplo de Uso das Listas

Aqui está um exemplo de como utilizar os diferentes tipos de listas em uma página HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de Listas</title>
</head>
<body>
  <h1>Listas em HTML</h1>

  <h2>Lista Ordenada</h2>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>

  <h2>Lista Não Ordenada</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <h2>Lista de Definição</h2>
  <dl>
    <dt>Café</dt>
    <dd>Preto</dd>
    <dd>Quente</dd>

    <dt>Leite</dt>
    <dd>Branco</dd>
  </dl>
</body>
</html>
```

Nesse exemplo, foram criadas três seções, cada uma representando um tipo de lista. Ao salvar e visualizar a página no navegador, é possível ver como cada tipo de lista é exibido.

---

Este é um exemplo básico de como utilizar os diferentes tipos de listas em HTML. Para aprender mais sobre HTML e seus recursos, é recomendado consultar recursos adicionais sobre o assunto.