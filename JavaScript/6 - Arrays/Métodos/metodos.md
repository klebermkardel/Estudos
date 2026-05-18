# O que são Métodos?

Em JavaScript, um array não é apenas uma lista de dados passiva. Ele é um **Objeto** inteligente.

Imagine o Array como um **Smartphone**:

    - Os **Dados** dentro dele (as strings, os números) são suas fotos e suas músicas.

    - Os **Métodos** são os **aplicativos nativos** que já vêm instalados no aparelho para manipular essas fotos e músicas (como o app de editar imagem, o botão de compartilhar, a lixeira).

Tenicamente, **método é uma função que pertence a um objeto**. É uma ação que o JavaScript já sabe fazer com aquele tipo de dado. Você reconhece um método porque ele sempre precisa de parênteses ```()``` no final para ser executado (como ```push()```, ```indexOf()```).

## Os Métodos Básicos (O Kit de Sobrevivência):

Estes são os métodos que alteram o "tamanho" e a estrutura da sua lista. Eles são divididos pelo comportamento:

**Para Adicionar Itens:**

    - ```.push(item)```: Empurra um novo item para o final da lista
    - ```.unshift(item)```: Empura um novo item para o começo dela (índice 0) e arrasta todos os outros para a frente.

**Para Remover Itens**:

    - ```.pop()```: Remove o último item da lista. Ele não precisa de nada dentro dos parênteses, ele simplesmente "arranca" o fim.
    - ```.shift()```: Remove o primeiro item da lista (índice 0) e reajusta os indices de todo mundo que sobrou.

**Para Localizar e Modificar**: 

     - ```.indexOf(item)```: Procura o item de cima a baixo e te diz o número do índice dele. (Se não localizar retorna -1).
    - ```.splice(índice, quantidade)```: Entra em uma posição específica e deleta (ou substitui) a quantidade de itens que você mandar.

    Para adicionar um item em uma posição específica (que não seja no começo nem no fim), você deve usar o mesmo ```.splice()``` que usamos para remover, mas com um "truque" nos argumentos.

    O método ```.splice()``` aceita um terceiro argumento (e quanto mais você quiser), que repsenta o novo item que você quer inserir.

    **Sintaxe para inserção**:

    ```array.splice(indice_onde_vai_entrar, 0, item_novo)```

        - **Primeiro argumento**: O número do índice onde o item vai se instalar.
        - **Segundo argumento:** O número ```0```. Isso diz ao JavaScript: "Não remova nenhum item, apenas empurre os outros para o lado".
        - **Terceiro argumento**: O valor que você quer colocar lá dentro.

    **Exemplo Prático**:

    ```js
    const empresas = ["Microsoft", "Google", "Apple"];

    // No índice 1, remova 0 itens e adicione "Netflix"
    empresas.splice(1, 0, "Netflix");

    console.log(empresas); 
    
    // Resultado: ["Microsoft", "Netflix", "Google", "Apple"]
    ```

## Existem outros métodos mais importantes?

Sim, e eles são o verdadeiro "superpoder" do JavaScript.

Os métodos que vimos acima são chamados de métodos de mutação (eles alteram o array original). Mas no dia a dia do desenvolvimento profissional, você usará muito os Métodos de Iteração (ou Métodos de Alta Ordem).

Eles servem para processar e transformar listas inteiras de uma vez só, sem que você precise criar laços de repetição manuais. Os três reis do mercado são:

1. ```.map()``` (O Transformador)

Ele passa por cada item da lista, faz uma alteração e te devolve uma lista nova com os resultados.

Exemplo: Você tem uma lista com os preços de 10 produtos e usa o ```.map()``` para aplicar 10% de desconto em todos eles de uma vez só.

2. `````.filter()````` (O Filtro de Busca)

Ele analisa o seu array e cria um novo array contendo apenas os itens que passaram no seu teste lógico.

Exemplo: Você tem uma lista com 50 vagas de emprego e usa o ```.filter()``` para extrair apenas as vagas que contêm a palavra "Junior".

3. ```.forEach()``` (O Executador)

Ele serve para passar por cada item da lista e executar uma ação (como um console.log), mas sem gerar uma lista nova. É o substituto moderno dos laços de repetição tradicionais.