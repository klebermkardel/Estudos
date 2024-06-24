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
            <td>byte</td>
            <td>Inteiro de 8 bits em notação de complemento de dois. Pode assumir<br>valores entre -2<sup>7</sup> = 128 e 2<sup>7</sup> -1 = 127.</td>
        </tr>
        <tr>
            <td>short</td>
            <td>Inteiro de 16 bits em notação de complemento de dois. Os valores possíveis<br>cobrem a faixa de -2<sup>15</sup> = -32.768 a 2<sup>15</sup> -1 = 32.767.</td>
        </tr>
        <tr>
            <td>int</td>
            <td>inteiro de 32 bits em noptação de complemento de dois. Pode assumir<br>valores entre -2<sup>31</sup> = 2.147.483.648 e -2<sup>31</sup> - 1 = 2.147.483.647</td>
        </tr>
        <tr>
            <td>long</td>
            <td>inteiro de 64 bits em notação de complemento de dois. Pode assumir<br>valores entre -2<sup>63</sup> e -2<sup>63</sup> - 1</td>
        </tr>
        <tr>
            <td>float</td>
            <td>Representa números em notação de ponto flutuante normalizada em<br>precisão dupla de 32 bits em conformida com a norma IEEE 754-1985. O<br>menor valor positivo representável é 1.40239846e-46 e o maior é 3.40282347e+38.</td>
        </tr>
        <tr>
            <td>double</td>
            <td>Representa números em notação de ponto flutuante normalizada em<br>precisão dupla de 64 bits em conformidada com a norma IEEE 754-1985. O<br>menor valor positivo representável é 4.94065645841246544e-324 e o maior é 1.1.7976931348623157e+308.</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th colspan="3">Tipos em C</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Tipo</b></td>
            <td><b>Tamanho em Bytes</b></td>
            <td><b>Faixa Mínima</b></td>
        </tr>
        <tr>
            <td>char</td>
            <td>1</td>
            <td>-127 a 127</td>
        </tr>
        <tr>
            <td>unsigned char</td>
            <td>1</td>
            <td>0 a 255</td>
        </tr>
        <tr>
            <td>signed char</td>
            <td>1</td>
            <td>-127 a 127</td>
        </tr>
        <tr>
            <td>int</td>
            <td>4</td>
            <td>-2.147.483648 a 2.147.483.647</td>
        </tr>
        <tr>
            <td>unsigned int</td>
            <td>4</td>
            <td>0 a 4.294.967.295</td>
        </tr>
        <tr>
            <td>signed int</td>
            <td>4</td>
            <td>-2.147.483648 a 2.147.483.647</td>
        </tr>
        <tr>
            <td>short int</td>
            <td>2</td>
            <td>-32.768 a 32.767</td>
        </tr>
        <tr>
            <td>unsigned short int</td>
            <td>2</td>
            <td>0 a 65.535</td>
        </tr>
        <tr>
            <td>signed short int</td>
            <td>2</td>
            <td>-32.768 a 32.767</td>
        </tr>
        <tr>
            <td>long int</td>
            <td>4</td>
            <td>-2.147.483648 a 2.147.483.647</td>
        </tr>
        <tr>
            <td>signed long int</td>
            <td>4</td>
            <td>-2.147.483648 a 2.147.483.647</td>
        </tr>
        <tr>
            <td>unsigned long int</td>
            <td>4</td>
            <td>0 a 4.294.967.295</td>
        </tr>
        <tr>
            <td>float</td>
            <td>4</td>
            <td>Seis digitos de precisão</td>
        </tr>
        <tr>
            <td>double</td>
            <td>8</td>
            <td>Dez digitos de precisão</td>
        </tr>
        <tr>
            <td>long double</td>
            <td>16</td>
            <td>Quinze digitos de precisão</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th colspan="3">Tipos em Pascal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Tipo de dado</b></td>
            <td><b>Conjunto</b></td>
            <td><b>Tamanho</b></td>
        </tr>
        <tr>
            <td>Shorint</td>
            <td>-128...127</td>
            <td>1 byte</td>
        </tr>
        <tr>
            <td>Integer</td>
            <td>-32767...32767</td>
            <td>2 bytes</td>
        </tr>
        <tr>
            <td>Longint</td>
            <td>-2147483648...2147483647</td>
            <td>4 bytes</td>
        </tr>
        <tr>
            <td>Byte</td>
            <td>0...255</td>
            <td>1 byte</td>
        </tr>
        <tr>
            <td>Word</td>
            <td>0...65535</td>
            <td>2 bytes</td>
        </tr>
       <tr>
            <td>Single</td>
            <td>-1.5e...3.4e38</td>
            <td>4 bytes</td>
        </tr>
        <tr>
            <td>Real</td>
            <td>2.9e39...1.7e38</td>
            <td>6 bytes</td>
        </tr>
        <tr>
            <td>Double</td>
            <td>5.0e324...1.7e308</td>
            <td>8 bytes</td>
        </tr>
        <tr>
            <td>Extended</td>
            <td>3.4e-4932...1.1e4932</td>
            <td>10 bytes</td>
        </tr>
        <tr>
            <td>Boolean</td>
            <td>true, false</td>
            <td>1 byte</td>
        </tr>
        <tr>
            <td>WordBool</td>
            <td>true, false</td>
            <td>2 bytes</td>
        </tr>
       <tr>
            <td>LongBool</td>
            <td>true, false</td>
            <td>4 bytes</td>
        </tr>
        <tr>
            <td>Char</td>
            <td>1 caractere (ASCII)</td>
            <td>1 byte</td>
        </tr>
        <tr>
            <td>String</td>
            <td>1 a 255 caractere (ASCII)</td>
            <td>1.255 bytes</td>
        </tr>
    </tbody>
</table>

### Operadores Aritméticos

Existem vários operadores que podem ser aplicados a variáveis. Vamos, inicialmente, nos concentrar num tipo específico, os números inteiros.

<table>
    <thead>
        <tr>
            <th colspan="3">Tipos de dados inteiro</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Elemento</b></td>
            <td><b>Descrição</b></td>
            <td><b>Símbolo</b></td>
        </tr>
        <tr>
            <td>Operação</td>
            <td>Adição</td>
            <td>+</td>
        </tr>
        <tr>
            <td></td>
            <td>Subtração</td>
            <td>-</td>
        </tr>
        <tr>
            <td></td>
            <td>Multiplicação</td>
            <td>*</td>
        </tr>
        <tr>
            <td></td>
            <td>Quociente Inteiro</td>
            <td>Div ou /</td>
        </tr>
        <tr>
            <td></td>
            <td>Resto de Divisão</td>
            <td>Mod ou %</td>
        </tr>
    </tbody>
</table>

Temos as quatro operações elementares (soma, subtração, multiplicação e divisão) conhecidas por todos, acrescidas da operação do Resto da Divisão. Deve-se observar aqui o que ocorre com as variáveis, nos exemplos adiante:

Admita que a variável "a" tenha o valor 2 (número dois), a variável "b" tenha valor 3 (três) e a variável "c" tenha valor 6 (seis).

Pois bem, vamos determinar os valores de "d':

d <- c - b, portanto d = 5

d <- a + b, portanto d = 3

d <- a * b, portanto d = 6

d <- c / b, portanto d = 2 (valor de "d" é real, isto é, conta com casas decimais teóricas)

d <- c div b, portanto d = 2 (valor de "d" é inteiro, isto é, não conta com casas decimais teóricas)

d <- b / a, portanto d = 1,5 (valor de "d" é real, isto é, conta com casas decimais teóricas)

d <- c div b, portanto d = 1 (valor de "d" é inteiro, isto é, não conta com casas decimais teóricas)

d <- b % a, portanto d = 1 (resto da divisão inteira de 3 por 2)

d <- c % a, portanto d = 0 (resto da divisão inteira de 6 por 2)

### Operadores Relacionais

Além de operações aritméticas, podemos aplicar as variáveis, operações relacionais. Novamente, vamos nos concentrar inicialmente nas variáveis numéricas inteiras

<table>
    <thead>
        <tr>
            <th colspan="3">Tipos de dados inteiro</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Elemento</b></td>
            <td><b>Descrição</b></td>
            <td><b>Símbolo</b></td>
        </tr>
        <tr>
            <td>Relação</td>
            <td>Menor</td>
            <td><</td>
        </tr>
        <tr>
            <td></td>
            <td>Maior</td>
            <td>></td>
        </tr>
        <tr>
            <td></td>
            <td>Igual</td>
            <td>=</td>
        </tr>
        <tr>
            <td></td>
            <td>Diferente</td>
            <td><></td>
        </tr>
        <tr>
            <td></td>
            <td>Menor ou Igual</td>
            <td><=</td>
        </tr>
        <tr>
            <td></td>
            <td>Maior ou Igual</td>
            <td>>=</td>
        </tr>
    </tbody>
</table>

Exemplicando - assumindo para "a", "b" e "c" os valores definidos anteriormente:

a) a > b (Falso, 2 é menor que 3 e não maior)
b) a <= b (Verdadeiro, 2 é menor ou igual a 3)
c) a = b (Falso, 2 é diferente de 3)
d) a <> (Verdadeiro, 2 é diferente de 3)
e) a * b = c (Verdadeiro, pois 6 é igual a 6)

### O Porquê das Variáveis

Variáveis funcionam como repositório de informações (dados) dentro do programa e, por esta razão, estes repositórios de armazenamento devem ser alocados na memória do computador. A maioria das linguagens de programação obriga o programador a declarar as variáveis que serão utilizadas, apresentando-as no início do programa para que os recursos necessários sejam alocados. Outras, entretanto, não obrigam a realizar esta declaração, alocando os recursos no momento em que as variáveis são mencionadas.

Se por acaso uma variável não venha a ter seu valor alterado ao longo da exceução do programa, podemos declará-la como constante.

Essa situação decorre de muitas origens, por exemplo, a linguagem BCPL (origem do C) não obrigava a declaração de uma variável, antes de usá-la. No BASIC, isso também não era obrigatório. Atualmente, entre outras, a linguaguem PHP defende essa tradição.

Existem ainda situações muito específicas. Em PL/SQL, por exemplo, os contadores de uma estrutura de repetição "para" (a ser vista mais adiante), também não devem ser declarados.

Enfim, a grande regra das linguagens de programação e da lógica de programação é que ***a única certeza é que nada é certo***.

Em Português Estruturado, por conseguinte, é opcional declarar ou não uma variável antes de usá-la. Talvez seja uma boa ideia não "perdermos" tempo declarando-as, antes de termos nosso algoritmo inteiramente resolvido, e só depois disso, declararmos nossas variáveis.

Lembremos, contudo, que antes de transcrevermos um algoritmo em Português Estruturado para C, Java ou Pascal, será necessário criarmos todas as diretivas necessárias nas linguagens, ou seja, deveremos declarar as variáveis.

Para resolvermos um problema qualquer, quase que certamente precisaremos armanezar as informações de entrada na memória do computador. Lembre-se, se por um lado, as variáveis são "o sangue" dos programas, por levarem as informções (nossos "nutrientes"), por outro lado, são as maiores causadoras de erros, justamente por má utilização.

Por isso, torna-se tão importante definirmos com a melhor lógica possível nossas variáveis.

### Variáveis nas Linguagens de Programação

Em Java, C ou Pascal, você precisará declarar a variável antes de utilizá-la:

* **Exemplos em Java/C:**

```
int camisapele = 10;
float salario;
String logradouro = "Av Ipiranga";
```

* **Exemplos em Pascal:**

```
c: char;
n: integeger;
```

* **A sintaxe para Java/C será:**

```
<tipo_de_dado> <nome_variável> [= inicialização];
```

* **Já para Pascal será:**

```
<nome_variável> : <tipo_de_dado>
```

### Regras na Declaração de Variáveis

Depois de declaradas, variáveis podem ser usadas livremente.

A variável deve ter um nome que facilite o entendimento de sua função no programa. Um bom nome para variável que for armezenar o salário, por exemp, seria "salario". Embora algumas linguagens permitam, atenha-se ao uso de apenas caracteres válidos na língua inglesa!

Toda variável é composta de um caractere alfabético ou "-", seguido de caracteres alfabéticos, números ou "-".

Em linguagens tipadas, apenas informações do mesmo tipo serão armazenadas nas variáveis, ou seja, não é possível armazenar um caractere em um inteiro ou vice-versa.