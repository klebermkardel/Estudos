# HTML - Introdução

## O que é HTML?

* `HTML`: Hypertext Markup Language
* `Hipertexto` é um termo da semiótica (ciência que estuda a comunicação) que significa que, diferentemente de um texto comum, ele pode conter referências navegáveis para outros textos.
* Essas referências são o que chamamos de `links`.
* Na semiótica é comum considerar praticamente a web inteira como um único hipertexto.
* Dizemos isso para dar um pouco de contexto, mas o que nos interessa mais como programadores é o Markup.
* Uma linguagem de marcação é uma linguaguem que possuem símbolos especiais que indicam `metainformações`.
- Elas referem-se à `forma, hierarquia, ordem` e/ou `semântica` dos elementos da página.
* Atualmente está na versão 5 (2014).

### Resumo

- Marcação -> `tags`
- `Tags` HTML:
 - Delimitadas por '<' e '>";
 - Usadas para descrever o `elemento` que será adicionado;
 - Exemplos de tags HTML:
  - `<button>`
  - `<p>`
  - Dentre outras

  Exemplo: Para pedir para o navegador exibir um [elemento] botão, podemos fazer:

  ```<button>Clique Aqui</button>```

  Elemento HTML
   - Geralmente contém três componentes:
    - Tag de abertura;
    - Conteúdo;
    - Tag de fechamento;

    - Possui um tipo (ex: botão, parágrafo, imagem, lista, tabela).
    - A representação textual de um elemento em código HTML é chamado de `tag`.
    - Grande parte dos elementos HTML permite que outros elementos sejam declarados em seu interior. Outros permite apenas elementos específicos ou texto e outros ainda não permite que nada seja colocado entre suas tags, esses têm a tag fechada nela mesmo.
    - Elementos também podem ter informações adicionais chamadas de atributos.
    - Atributos são pares chave-valor, separados por = e os valores devem estar envoltos em aspas.
    - Alguns atributos podem ser usados em qualquer elemento como, por exemplo, style que nos permite usar CSS para estilizar o elemento, ou id que provê uma identificação única para o elemento.
    - Outros são específicos de determinados elementos, por exemplo, uma imagem pode ter uma altura (height) e largura (width) e deve ter um src indicando a URL da imagem.
    - Um campo de texto pode ter readonly, por exemplo, para marcar que o campo não pode ser alterado. Ou required que impede que ele seja enviado vazio.

    ### Estrutura Básica do HTML

    ```
    <!DOCTYPE html>
    <html>
        <head>
            <title>Título da Página</title>
        </head>
        <body>
            <!-- Conteúdo exibido na página -->
        </body>
    </html>
    ```