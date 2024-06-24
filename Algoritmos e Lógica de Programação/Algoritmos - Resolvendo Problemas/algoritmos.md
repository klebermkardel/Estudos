# Algoritmos - Resolvendo Problemas

Admitamos um problema que possa ser solucionado através de um procedimento ordenado de instruções. Podemos comparar a questão como a confecção de um bolo a partir de uma receita. Um algoritmo nada mis que é um conjunto de instruções ordenadas logicamente de forma a resolver um problema.

Naturalmente, um algoritmo para ser executado em um computador deve ser transformado em um programa, numa linguagem qualquer. Antes de pensarmos em algoritmos devemos montar nossa estratégia. A estratégia é muito mais importante que o algoritmo e o programa, pois uma vez que a desenvolvermos, faremos sistemas (conjuntos de programas) facilmente (ou nem tanto).

Assim temos que: uma estratégia **->** algoritmo **->** programa de computador **->** programa executável!

Todo programa recebe (ou parte de) dados, os transforma e gera resultados (outros dados processados), daí a expressão original **processamento de dados** que outrora definia a área de TI das organizações (os antigos CPD - Centro de Processamento de Dados).

***O PROBLEMA DO CÁLCULO DA ÁREA DE UM TRIÂNGULO***

![<Área do Triângulo](<on-image-algoritimo1.jpg>)

O cálculo da área de um triângulo é um processo bastante conhecido e bastante simples. Basta multiplicarmos o valor da base desse triângulo por sua altura, dividindo o resultado por dois para obter o valor da área.

Vamos a um exemplo: imaginemos que desejamos calcular a área de um triângulo. Ora, para isso precisaremos conhecer uma "fórmula" oriunda da geometria. Essa fórmula será, em nosso caso, a **estratégia**.

Nesse pequeno algoritmo usamos três variáveis. Variáveis são tão importantes que serão tratadas na próxima etapa desse trabalho. No momento, basta que você admita que cada "letra', que representa um valor qualquer, seja nossa "variável".

Assim, a letra "b" é a primeira de nossas vaariáveis e representa a base do triângulo cuja área desejamos calcular. Observemosque se trata de um valor numérico e como pode ser diferente de um caso para outro, por isso mesmo se trata de uma variável.

Analogamente, "h" faz o papel da **altura** e "a" faz o papel da **área"".

A chamada descrição narrativa descreve a solução do problema na forma de uma "receita", muito boa para seres humanos, mas péssima para computadores.

***RETOMANDO O CÁLCULO DA ÁREA DE UM TRIÂNGULO***

A solução anterior, embora bastante clara, exigiria que computadores processassem uma linguagem humana, ou algo próximo disso. Infelizmente com as tecnologias ainda estamos muito longe disso. Talvez não tão longe assim, quando pensamos em Siri ou Cortana.

Para se tornar uma solução viável, precisaremos de um meio termo, nem linguagem humana, nem Assembly: uma linguagem intermediária, e são ests as linguagens de computador. À esta altura, trabalhar em uma delas em específico não é importante e, por esta razão, escreveremos um pseudocódigo ou Português Estruturado, que se assemelha a um programa escrito em uma linguagem de computador, e, portanto, pode ser transcrito posteriormente.

```
algoritmo leia;
variáveis
    a, b, h: inteiro;
fim-variáveis
início
    imprima("Digite a base do triângulo:");
    b := leia();
    imprima("Digite a altura do trigânulo:");
    h := leia();
    a := (b * h) / 2;
    imprima("A área do triângulo é: ", a);
fim
```

Usamos as mesmas variáveis da solução narrativa, mas substituímos frases inteira por "termos de comando" como "leia" e "imprima", que serão doravante chamadas de **instruções**. Além dissom representamos o cálculo da área como uma instrução de atribuição, **a := (b * h) * 2**, que pode ser "traduzida" como: "a" recebe o valor da multiplicação dos valores de "b" e de "h" divididos por dois.

É importante observar que em muitas publicações encontraremos essa expressão indicada desta forma: **s ← (b * h) / 2**. Ora, como nas linguagens de programação não são aceitos símbolos gráficos como a seta, essa é substituída por um ou mais símbolos, geralmente usados em alguma linguagem de programação. Habitualmente são usados o sinal de igualdade ("=") ou esse sinal precedido por dois pontos (":=").

Convencionaremos a partir daqui a última notação, visando evitar confusões entre atribuições, situações nas quais atribímos um valor a uma vaariável, com comparações, em que é relacionado o valor de uma variável com outa, com um valor ou uma epressão.

Também deve ser observada a endentação, ou seja, os espaços existentes entre linhas e instruções. Você pode imaginar uma linha invisíovel, criando "blocos" imaginários de intruções, como na imagem a seguir.

![<Endentação](<./on-image-exemplo-algoritimos.jpg>)

Embora a endentação seja opcional na maioria das linguagens, o não endentar separa, de fato, os programadores profissionais dos amadores. Um programa feito por um profissional é rigorosamente endentado, visando os seguintes benefícios:

* Facilidade na leitura do código.

* Facilidade no momento de se fazer uma alteração no código, a chamada "manutenção".

* Documentação no código.

Daqui por diante, passaremos a definir **instruções** e exemplificá-las quase sempre usando **variáveis**. De fato, programas de computador são pouco mais que um extenso conjunto de variáveis que são alteradas através de instruções. Quando tudo isso funciona harmoniosamente, temos a solução de nossos problemas. Em caso contrário, apenas mais um problema.

Então é chegada a hora de entendermos o que são variáveis de maneira mais formal.

## Variáveis e Sua Tipologia

### Dados, Informações e Variáveis

Chamamos de **dados de entrada** o conjunto de informações que o programa precisa receber para início de processamento. No exemplo anterior, a base e a altura eram nossas "entradas", necessárias para obtenção da área do triângulo, nosso objetivo.

Chamamos de **dados de saída** o conjunto de informações que o programa devolve como resposta após o processamento.

Observemos que nossa função, basicamente, é transformar informações iniciais que usualmente chamamos de dados, em informações finais, as respostas que serão usadas por quem utiliza um programa de computador.

Toda informação para ser útil deve ser FTP (Fidedigna, Temporal e Pertinente)!

Uma informação é FTP quando é verdadeiro, no momento correto e relativo à questão que queremos responder. O quadro a seguir resume essa situação:

![<Informação FTP](<./informacao-ftp.png>)

Entendemos, portanto, que existem vários tipos de dados, que usaremos conforme a necessidade. Por exemplo, podemos somar apenas números, quer sejam reais ou inteiros; ou somardatas com números, obtendo uma data mais adiante do que a data base dessa soma; e também concatenar expressões caracteres, algo quase que uma soma. Vamos exemplificar:

A <- 2 e B <- 3, então A + B resulta em 5.

Já se A <- 1,5 e B <- 2 então A + B resulta em 3,5.

Ainda, se A <- 01 jan 1980 e B <- 4, então A + B resulta em 05 jan 1980.

Finalmente se A <- "Lógica" e B <- "Programação" então A + B resulta em LógicaProgramação (sem espaço).

Algumas operações seriam inválidas, justamente por não fazerem qualquer sentido. Por exemplo, o que resultaria na soma de um número com uma expressão caractere? Erro, somente.

Note que usamos uma convenção quando definimos caracteres, pois os colocamos entre aspas. Isso quer dizer, na maioria das linguagens que estamos diante de uma expressão caractere.

Assim, admitindo que o sinal "+" some números e concatene letras teríamos também o seguinte resultado, por maisestranho que possa parecer.

A <- "5" e B <- "3", então A + B resultado em "53" (e não 8!).

### Definindo Variáveis

Variáveis são, portanto, áreas de memória que armazenarão informações pertinentes ao programa durante sua execução, e recebem este nome pois seu conteúdo pode variar ao longo deste período. Podem representar números inteiros, números reais, caracteres, tipos booleanos, palavras, datas, valores monetários, conjuntos e muitomais coisas. Em algoritmos, vamos nos ater apenas nos tipos numéricos, caracteres e booleanos.

***Num programa de computador devemos especificar os tipos de dados que serão utilizados como entrada e saída.***

Por exemplo, no único algoritmo que vimos até agora, para cálculo da área de um triângulo, pudemos perceber duas variáveisnuméricas que receberam, respectivamente, os valores da basee da altura de um triângulo, que teve sua área calculada e armazenada numa variável destinada ao cálculo da área.

Quando vertemos um programa para alguma linguagem de computador, devemos observar que nem tudo ocorre como pensamosem algoritmos, por vários motivos. Uma delas é a chamada tipologia das variáveis de qualquer linguagem de computador.

Por exemplo, enquanto a linguagem Java é tipada, ou seja, caso você tente fazer uma operação ilegal (multiplicar um caractere), o compilador dirá a você. Embora a linguagem C também seja tipada, ela o é de maneira mais fraca, isto é, se você tentar fzer uma operação como somar um caractere a um número, ela tentará solucionar isso para você, se isso for de interesse.

Por fim, há linguagens como Pascal, que são fortemente tipadas. Qualquer tentativa de misturar tipos, mesmo correlatos, será encarada como erro. Assim, se você tentar dividir o inteiro 2 pelo inteiro 1, apenas obterá um erro. Sendo assim, caso desejarmos dividir os dois números inteiros, precisaremos usar uma operção de divisão inteira (para números inteiros) e uma para divisão que tenha como resposta um número real.

Pode parecer complicado, e de fato não é algo muito simples. Todavia, programadores experientes, com o tempo, trabalham tão naturalmente nas linguagens que dominam, que situações assim passam totalmente despercebidas.

A seguir, exibimos alguns exemplos de tipos de variáveis em algumas linguagens de programação

<table>
    <thead>
        <tr>
            <th colspan="2">Tipos em Java</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Tipo</b></td>
            <td><b>Descrição</b></td>
        </tr>
        <tr>
            <td>boolean</td>
            <td>Pode assumir o valor <i>true</i> ou <i>false</i></td>
        </tr>
        <tr>
            <td>char</td>
            <td>Caracterece em notação Unicode de 16 bits.<br>Serve para armazenamento de dados alfanuméricos. Também pode ser<br>usado como um dado inteiro com valores na faixa entre 0 e 65535.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

