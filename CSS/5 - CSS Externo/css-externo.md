# Como funciona o CSS externo?

Em vez de deixar o código CSS "espremido" dentro do arquivo HTML, nós criamos um arquivo exclusivo para ele. A mágica acontece quando conectamos esses dois arquivos usando uma linha de código.

Imagine que temos uma pasta no computador com dois arquivos dentro:

1. ```index.html```: (Estrutura HTML)
2. ```style.css```: (Estilos CSS)

## Passo 1: O arquivo HTML (```index.html```)

Para avisar o HTML que existe um arquivo de estilo para ele usar, nós oclocamos a tag ```<link>``` dentro do ```<head>```. Ela fica assim:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Meu Site</title>
        <!-- Esta linha abaixo faz a conexão dos arquivos -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Boas-vindas ao meu site!</h1>
        <p class="subtitulo">Aprendendo CSS do jeito certo.</p>
    </body>
</html>
```

## Passo 2: O arquivo CSS (```style.css```)

Nesse arquivo não vai nenhuma tag HTML (nada de ```<style>```, ```<body>```, ou ```<head>```). Ele é um arquivo puramente de teto contendo apenas regras do CSS que aprendemos:

```CSS
/* Dentro do arquivo style.css */

h1 {
    color: #2c3e8d; /* Um tom de azul escuro */
    font-family: Arial, sans-serif;
    text-align: center;
}

.subtitulo {
    #7f8c8d; /* Um cinza mais suave */
    font-size: 18px;
    text-align: center;
}
```

**``Nota sobre organização**: Percebeu o código ```/* Dentro do arquivo... */```? Isso é um ```comentário em CSS```. Tudo o que estiver entre ```/*``` e ```*/``` é ignorado pelo navegador. Serve apenas para você deixar notas para si mesmo ou para outros programadores.