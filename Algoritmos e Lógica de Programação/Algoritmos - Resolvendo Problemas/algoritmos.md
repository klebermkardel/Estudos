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

## Instruções de Entrada e Saída

Para que o computador possa se comunicar com o usuário, é preciso que seja capaz de receber dados e devolvê-los. Ao conjunto de instruções que permitem escritas em tela, papel ou mídias magnéticas, damos o nome de **saídas**. Já aquelas relativas à digitação de dados ou de sua leitura em meios magnéticos, chamamos de **entradas**.

### SAÍDA 

Entedemos "saída", como o conjunto de instruções que permitem a comunicação com o usuário ou a escrita de dados ou de quaisquer informações em tela (saída principal), papel (impressora) ou em disco (gravação). Para saída, usaremos, na maioria das vezes, o comando "**imprima**", mas "exiba" ou "escreva" são igualmente válidos.

Em Java, por exemplo, usamos a instruções System.out.print("algo pra imprimir") e no C#, Console.Write("imprima isso") desempenha este papel;

Vale notar que a expressão a ser "impressa" aparece cercada por parênteses, recurso usado em inúmeras linguagens de programação. Por ser uma expressão alfanumérica e não uma variável, a expressão aparece entre asps, outra característica encontrada em inúmeras linguagens de programação.

Além disso, notamos que a instrução tem um terminador, no caso, o ponto e vírgula, novamente característica observada em inúmeras outras linguagens de programação.

Em Pascal temos Write('algo a imprimir'); ou WriteLn('algo a imprimir'); a diferença entre um comando e outro é que no primeiro o cursor é posicionado na mesma linha do que foi impresso, enquanto que no segundo o cursor é posicionado na linha abaixo (ln, de line)

Em linguagen C, a instrução varia levemente, "printf", mas há a necessidade de envio de um caractere especial solicitando o salto de linha ("∖n). Em Pascal, "write/writeln", como em Java.

### ENTRADA

Para a entrada de dados, utilizaremos a classe Scanner em Java (conecida como scanf em C ou Console.ReadLine(), quando falamos em C#). Já em Pascal, "read/readln", pois com ela podemos capturar os dados informados através do teclado do computador.

Em todas as linguagens de programação dispomos de um conjunto de instruções para leituras nos mais diversos dispositivos, que resultam em entradas de dados.

### Exemplificando Entradas e Saídas

Nos exemplos apresentados aditante, veremos como escrever instruções de entrada e saída em Português Estruturado e em algumas linguagens de programação:

#### Exemplo de Português Estruturado

```
|nome := leia();
|idade := leia();
|cpf := leia();
|salario := leia();
|imprima("Nome: ", nome);
|imprima("Idade: ", idade);
|imprima("CPF: ", cpf);
|imprima("Salário: ", salario);
```

Em nosso primeiro exemplo, vamos ler uma série de dados pessoais, através de um teclado e mostrar esse resultado na tela do computador, em Português Estruturado

Observamos que barra de endentação marca o início e o final do programa, ou um "parágrafo". Também chamamos essa estrutura de "bloco do programa", ou seja, no final das contas um algoritmo nada mais é que um conjunto de "blocos" devidamente ordenados.

Vamos agora ver programas semelhantes, em Java, C e Pascal:

#### Exemplo em Java

```
package t01;
import java.util.Scanner;

pubic class T01 {
    public static void main (String[] args) {
        int idade;
        double salario;
        String nome cpf;
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite seu nome: ");
        nome = entrada.nextLine();
        System.out.println("Digite seu CPF: ");
        cpf = entrada.nextLine();
        System.out.println("Digite sua idade: ");
        idade = entrada.nextLine();
        System.out.println("Digite o valor do seu salário: ");
        salario = entrada.nextLine();
        System.out.println("Nome: "+nome);
        System.out.println("Idade: "+idade);
        System.out.println("CPF: "+cpf);
        System.out.println("Salário: "+salario);
        entrada.close();
    }
}
```

#### Exemplo em C

```
#include <stdio.h>
int main() {
    char nome[30], cpf[20];
    int idade;
    float salario;
    printf("Informe o nome: ");
    scanf("%s", nome);
    printf("Informe o CPF: ");
    scanf("%s", cpf);
    printf("Informe a idade: ");
    scanf("%d", &idade);
    printf("Informe o salário: ");
    scanf("%f", &salario);
    printf("\nNome: %s", nome);
    printf("\nIdade: %d", idade);
    printf("\nCPF: %s", cpf);
    printf("\nSalário: %.2f", salario);
}
```

#### Exemplo em Pascal

```
Program Teste;
Uses crt;
var idade : Integer;
  nome, cpf : String[20];
  salario : real;
begin
  ClrScr;
  Write('Nome : '); ReadLn(nome);
  Write('Idade : '); ReadLn(idade);
  Write('Salario : '); ReadLn(salario);
  Write('CPF : '); ReadLn(cpf);
  Writeln;
  WriteLn('Nome: ', nome);
  WriteLn('Idade: ', idade);
  WriteLn('Salario: ', salario:8:2);
  WriteLn('CPF: ', cpf);
  ReadLn;
end.
```

#### Problemas Resolvidos (Português Estruturado)

* Dados dois números, imprima sua soma:

```
algoritmo soma;
variáveis
    a, b, s : inteiro;
fim-variáveis
início
    imprima("Digite o número 1:");
    a := leia();
    imprima("Digite o número 2:");
    b := leia();
    s := a + b;
    imprima("A soma dos dois números é: ", s);
fim
```

* Escreva um programa que receba a data de nascimento de uma pessoa e a data de hoje e calcule, aproximadamente, quantos dias ela viveu. Considere um mês com 30 dias e um ano com 12 meses.

```
algoritmo dias;
variáveis
    dh, mh, ah, dn, mn, an, wd1, wm1, wa, wd2, wm2, tot : inteiro;
fim-variáveis
início
    imprima("Digite o dia de hoje: ");
    dh := leia();
    imprima("Digite o mês de hoje: ");
    mh := leia();
    imprima("Digite o ano de hoje: ");
    ah := leia();
    imprima("Digite o dia de nascimento: ");
    dn := leia();
    imprima("Digite o mês de nascimento: ");
    mn := leia();
    imprima("Digite o ano de nascimento: ");
    an := leia();
    wd1 := 30 - dn;
    wm1 := (12 - mn) * 30;
    wa := (ah - an - 1) * 360;
    wd2 := dh;
    wm2 := (mh - 1) * 30;
    tot := wd1 + wm1 + wa + wd2 + wm2;
    imprima("Dias Vividos (por Totalização): ", tot);
fim
```

* Escreva um algoritmo que calcule o IMC de uma pessoa.

Lembrando que o IMC é calculado através da expressão "Peso / Altura²"

```
algoritmo imc;
variáveis
    peso : inteiro;
    altura, imc : real;
fim-variáveis
início
    imprima("Digite altura: ");
    altura := leia();
    imprima("Digite peso: ");
    peso := leia();
    imc := peso / (altura * altura);
    imprima("IMC: ",imc);
fim
```

* Escreva um algoritmo que resolva uma equação do 1º Grau.

Admita que a expressão "Ax + B = 0" sempre seja válida, ou seja, "A" sempre será um número distindo de 0:

```
algoritmo equacao;
variáveis
    a,b : inteiro;
    x : real;
fim-variáveis
início
    imprima("Digite a: ");
    a := leia();
    imprima("Digite b: ");
    b := leia();
    x :=  -b / a;
    imprima("Divisão: ", x);
fim
```

## Instruções e Funções

Na evolução das linguagens de programação, sempre existiram dificuldades na separação do que seria uma instrução da própria linguagem e o que seria uma função a ser escrita na própria linguagem.

Pensemos em elevar um número ao quadrado. Na prática, basta multiplicar o número por si mesmo. Assim, teríamos alternativamente e dependendo da linguagem de programação uma das três possibilidades:

```
algoritmo elevaquadrado1;
variáveis
  a,b,c,d : inteiro;
fim-variáveis
início
    a := 3;
    b := a ** 2;
    c := a ^ 2;
    d := a * a;
    imprima(a," elevado ao quadrado resulta: ",b, " ", c," ", d);
fim
```

Note que esse algoritmo não será processado em praticamente nenhuma linguagem de programação. Embora todas entendam a instrução "a * a" (uma multiplicação simples), algumas compreenderão "a ** 2" enquanto outras "a ^ 2", por se tratarem de operadores de exponencição diferentes. Na verdade, linguagens antigas como o o FORTRAN usavam "**", pois o símbolo "^" sequer estava disponível nos primeiros computadores.

Nada impede, entretanto, que o implementador entenda que elevar ao quadrado é algo que possa ser feito na própria linguagen. Na realidade, cada implementador entende da maneira que lhe aprouver o que é função e o que é instrução.

E nada é tão óbvio como possa parecer ser.

Por exemplo, Dennis Ritchie criador da Linguagem C, a construiu com o firme propósito de torná-la rápida e independente do hardware (computador) onde será executada. Para tanto, era fundamental tornar as instruções de entrada e saída e funções que pudessem ser implementadas em C no próprio Sistema Operacional nativo, onde os programas compilados em C seriam executados. Assim, foi criada uma biblioteca chamada "stdio.h", que significa "Standard Input Output", ou seja, entrada e saídas padrão, em que "comandos" como **imprima**, que em C pode ser representado na função (e não comando) **printf**.

Embora as entradas e saídas padrão sejam implementadas de maneira diferente em vários sistemas operacionais, a linguagem C as padronizou em funções scanf() e printf(), facilitando e tornando mais produtiva a codificação - do contrário, seria necessário manipular diferentes hardwares em diferentes sistemas operacionais, um verdadeiro pesadelo.

Ao repensar em nosso problemar de elevar um número ao quadrado, chegamos à uma solução que qualquer linguagem de programação poderá implementar:

```
algoritmo elevaquadrado2;
variáveis
  a,b,c : inteiro;
fim-variáveis
início
    a := 3;
    b := a * a;
    c := quadrado(a);
    imprima(a," elevado ao quadrado resulta: ",b," ", c);
fim

função quadrado(n : inteiro) : inteiro
início
    retorne n * n;
fim
```

Funções (e Procedimentos) são um tópico muito importante e serão tratados mais adiante num estudo bem mais aprofundado. No momento, basta saber que podemos construir estruturas equivalentes a alguma instrução que não exista numa linguagem.

Veremos nesse material como construir um algoritmo destinado o cálculo da raiz quadrada, criado por ninguém menos que Isaac Newton, que pode ser implementado em qualquer linguagem de programação, pois a "função" cálculo da raiz quadrada de um número, também não é nativa em todas as linguagens de programação.

Assim, uma função é um subprograma ou uma rotina de um programa principal ou "programa chamador"; ao ser chamado no programado principal, o fluxo é desviado para a função ou subprograma, que executa uma tarefa estabelecida e, em seguidam devolve o controle ao programa chamador.

A parte interessante é que informações pode ser passadas nestes "desvios", tornando o subprograma mais flexível e útil. No exemlo, no que a função **quadrado()** recebe um número inteiro entre seus parênteses, e a essa entrada de informações damos o nome de **parâmetros**. Com este número inteiro armazenado em "n" (qualquer número inteiro no intervaki válido!) o subprograma o multiplica por si mesmo, devolvendo-o elevado para o programa principal.

Como podemos facilmente multiplicar o número por si mesmo, parece desnecessário criarmos uma função para isso... na verdade, é mesmo! Contudo, a ideia nesse momento é apenas de apresentação de um conceito.

Conceito (as funções) que tem um criador, ou melhor, criadora. A primeira pessoa a pensar na criação de funções repetitivas que pudessem ser usadas para executar certos processos inúmeras vezes foi ninguém menos que Ada de Lovelace

## Fluxogramas

Trata-se de uma técnica muito útil para documentação de processos administrativos e que é usada por alguns autores como apoio ao aprendizado de lógica de programação.

![<Fluxograma](<./on-image-fluxograma-calculo-area-triangulo.svg>)

O Fluxograma, também conhecido como diagrama de blocos, é uma forma quase universal de representação, pois utiliza figuras geométricas para ilustração dos passos a serem observados na resolução de problemas.

A seguir, alguns símbolos usados na representação de intruções geralmente utilizados nas réguas de fluxograma.

Cada instrução ou ação aser executada deve ser representada por meio de um símbolo gráfico.

Não nos utilizaremos desse recurso nesse material, uma vez que vários autores concordam quanto a pouco eficiência dos fluxogramas, principalmente quando a complexidade dos algoritmos cresce. No entanto, para aqueles que preferirem ao menos no princípio utilizarem de uma notação mais visual, essa técnica poderá ser válida.

![<Elementos Gráficos Fluxograma](<./on-image-elementos-fluxograma.svg>)