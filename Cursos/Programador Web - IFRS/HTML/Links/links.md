# README.md

Este é um documento README.md que fornece informações sobre a criação de links em páginas HTML.

## Links em HTML

As páginas HTML são formadas por links, que permitem a ligação entre diferentes páginas. Para criar links em HTML, é necessário utilizar a tag `<a>` (âncora), que define um hiperlink para outra página. O atributo `href` é utilizado para especificar o destino do link, ou seja, a página para a qual o link deve redirecionar.

Por exemplo, para criar um link para a página "sobre mim.html", podemos usar a seguinte estrutura de código:

```html
<a href="sobre-mim.html">Sobre Mim</a>
```

Nesse exemplo, o texto "Sobre Mim" será exibido como um link. Quando o usuário clicar nesse link, ele será redirecionado para a página "sobre-mim.html".

Além do atributo `href`, existem outros parâmetros que podem ser utilizados na tag `<a>`. Alguns desses parâmetros incluem:

- O parâmetro `download`: usado para indicar que o link é um arquivo para download. Quando o usuário clicar no link, o arquivo será baixado para o computador.
- O parâmetro `target`: usado para especificar como o destino do link deve ser aberto. Por exemplo, é possível definir se o link deve ser aberto em uma nova aba ou na mesma aba em que a página atual está sendo exibida.

### Exemplo de uso de links

Aqui está um exemplo de como utilizar links em três páginas HTML: "index.html", "sobre-mim.html" e "contato.html". A página "index.html" será a página inicial e conterá os links para as outras duas páginas.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Meu Site</title>
</head>
<body>
  <h1>Meu Site</h1>

  <nav>
    <ul>
      <li><a href="sobre-mim.html">Sobre Mim</a></li>
      <li><a href="contato.html">Contato</a></li>
    </ul>
  </nav>

  <section>
    <h2>Página Inicial</h2>
    <p>Bem-vindo à página inicial do meu site.</p>
  </section>
</body>
</html>
```

No exemplo acima, a tag `<nav>` é usada para criar uma área de navegação contendo os links para as páginas "sobre-mim.html" e "contato.html". A seção seguinte, representada pela tag `<section>`, contém o conteúdo da página inicial.

Ao salvar e visualizar as páginas no navegador, é possível clicar nos links para navegar entre as páginas.

---

Este é um exemplo básico de como criar links em páginas HTML. Para aprender mais sobre HTML e seus recursos, é recomendado consultar recursos adicionais sobre o assunto.