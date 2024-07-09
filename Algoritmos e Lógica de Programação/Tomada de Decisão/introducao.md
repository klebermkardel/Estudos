# Tomada de Decisão - Introdução

Ao ler o capítulo anterior, podemos concluir que nossos algoritmos "fluem" bem, mas não conseguem "lidar" com problemas. Ora, a vida real é repleta deles, portanto, nossos algoritmos em algum momento precisarão lidar com isso.

Por exemplo, embora toda adição de números inteiros apresente uma solução (x = a + b, onde "a" e "b" são números conhecidos), isso não ocorre nas equções de primeiro ou de segundo grau. Nas equações de primeiro grau (ax + b = 0), notamos que o fator (a variável "a") que multiplica nossa incógnita (a variável "x") jamais poderá ser zero, pois não temos solução para divisões por zero.

O mesmo incoveniente ocorre na resolução de uma equação de segundo grau, pois como resolver algebricamente uma situação em que a raiz quadrada presente na fórmula de Bhaskara se torne negativa?

Vamos analisar a fórmula de Bhaskara (ou ao menos a ele atribuída, vale a pena pesquisa a respeito):

![<Fórmula de Bhaskara](<./Introdução/1_on-image-formula-de-bhaskara.jpg>)

Observe que se testarmos a fórmula com vários valores arbitrários, se "insistirmos" o suficiente no cáculo da raiz de ∆ teremos a ocorrência de um erro! Isso ocorre, pois, obrigatoriamente, ∆ tem que ser maior ou igual a zero. Caso contrário, simplesmente não temos solução para a fórmula de Bhaskara.

Se o algoritmo for criado sem levar isso em consideração, irá parar pela execução de um erro, no caso, uma divisão por zero. Neste caso, ao invés de calcularmos e apresentarmos uma solução, deveríamos indicar que não há uma solução, evitando assim a ocorrência do erro! Basta uma tomada de decisão bem pensada, para resolver essa inconveniente situação.

## Como tomar decisões?

No problema descrito anteriormente, se pudermos identificar previamente que o número que terá sua raiz calculada é negativo, poderemos evitar essa situação.

Em nossa vida, tomamos decisões o tempo todo. Até dizemos, quando existem muitas hipóteses a serem analisadas "e se isso?" ou "e se aquilo?". Vamos nos deter nessa pequena, mas fundamental palavra quando se pensa em programação: **se**.

### A instrução SE

Vamos continuar a pensar na questão de uma raiz hipoteticamente negativa. Em situações como essa, precisaremos verificar o valor armazenado na variável ∆ antes de efetuarmos alguma operação, como o envio de uma resposta ou a realização de um cálculo.

Dependendo do valor de uma ou mais variáveis, o algoritmo pode tomar rumos distintos e, muitas vezes, tornar-se errado.

Por exemplo, uma equação de 2º grau, quando ∆ é negaativo não podemos extrair a raiz quadrada. Temos aqui então um interessantíssimo ponto de decisão, pois dependendo do valor de ∆, podemos tomar ao menos duas decisões distintas, a saber:

∆ < 0: exibiremos a mensagem que não existem raízes para a equação.

∆ >= 0: calcularemos as raízes de acordo com a fórmula e exibiremos seu resultado.

Para isso, temos a estrutura de decisão se/então[senão] que como mostra o pseucódigo a seguir, nos permite abordar o problema em questão e solucioná-lo de uma forma bastante elegante:

```
SE ∆ < 0 ENTÃO
    Imprima "A equação não possui raízes reais."
SENÃO
    Imprima "A equação possui uma ou duas raízes reais."
```

Várias são as observações:

Note que da análise da expressão ∆ < 0 é que se "decide pelo cminho a seguir"!

Quando a expressão analisada for verdadeira, segue-se pela linha do **então*.

Por outro lado, quando a situação analisada é falsa, adota-se a linha do **senão**.

Observe, ainda, as barras de endentação presentes. A mais externa representa aquela que norteia o problema em questão.

Já as barras de endentação mais internas indicam alternativas. A existente entre as palavras **então** e **senão** representam as instruções que serão executadas quando o valor do ∆ for negativo, ou seja, menor que zero.

De maneira análoga, quando a barra de endentação existente depois do **senão**, conterá o conjunto de instruções a serem executadas, caso a condição testada não seja verdadeira, ou seja, caso o valor do ∆ seja positivo ou zero.

As linguagens de programação, cada uma a seu modo, procuram representar essas situações. Em nosso material iremos, sempre que necessário, nos valer de exemplos nas mais diversas linguagens de programação, e sempre que possível comparando a solução de cada problema que se deseja resolver. Vamos ver então como ficaria esse teste em Java:

**Java**:

```
if (delta < 0) {
    System.out.println(“A equação não possui raízes reais”);
}
else {
    System.out.println(“A equação possui 2 raízes reais”);
}
```

Observamos facilmente que as barras foram substituídas por pares de instrução, cercados por "chaves", através dos símbolos **"{}"**. Essa mesma simbologia é usada na linguagem C, por exemplo.

Já se a instrução em questão estivesse escrita em Pascal, teríamos uma solução ligeiramente distinta:

**Pascal**:

```
if delta &lt; 0 then
Write(‘A equação não possui raízes reais’);
else
Write(‘A equação possui 2 raízes reais’);
```

Observa-se que em Pascal, o bloco em questão "desapareceu", sendo substituído por um terminador (o ponto e vírcula no final do último comando Write).

Mas, como ficaria em Pascal, se além de apresentarmos essa mensagem também tivéssemos como outra instrução, que apenas atribuísse o valor 1 (o número um) a uma variável chamada "controle", quando o problema tiver a solução ou 0 (o número zero) ao "controle" quando o problema não tiver solução?

```
if delta < 0 then begin
  Write(‘A equação não possui raízes reais’);
  Controle := 0;
  end
else begin
  Write(‘A equação possui 2 raízes reais’);
  Controle := 1;
  end;
```

É fácil perceber que simplesmente as chaves do Java foram substituídas pelas palavras “Begin-end” em Pascal, que representam o começo e o final do “bloco de instruções”. Observe ainda que as linguagens de programação têm sintaxes bem próprias e particulares, como são os idiomas humanos.

Mesmo a posição em que as instruções devem ser escritas, varia de linguagem para linguagem. A posição das instruções para “imprimir” um valor em Java deve ser escrita abaixo da expressão analisada ou da palavra “else”, deslocando-se o código um pouco à direita, para dar uma ideia de reentrância.

Já em Pascal, sugere-se fortemente que essa distância seja de três letras. Assim, o “W” de Write deveria estar abaixo do “e” de else. Os clássicos livros de Pascal ou de Turbo Pascal, como os escritos por Steve Wood, são categóricos a esse respeito.

Em COBOL, o espaço existente é obrigatoriamente estabelecido. Ou seja, se algo é esperado em determinada coluna e estiver colocado numa coluna adiante ou anterior, será tratado como erro. Daí a existência de vários editores de programa, que são muito específicos em relação à linha e à coluna em que se está escrevendo, justamente para permitir ao programador o controle exato da localização de um bloco de instruções.

Não é tão simples notar, mas antes da palavra “else” (senão) em Pascal, nunca se usa o terminador (ponto e vírgula), pois a instrução “se” só termina, se tiver “senão” ao final deste. Esse tipo de situação jamais ocorrerá em Java, pois em Java o símbolo } (fecha a chave) impede essa ocorrência. 

Em Linguagem C, contudo, o problema não é resolvido tão facilmente. Tampouco em BASIC. Vale a pena pesquisar a respeito.

Como se vê, ao aprender lógica de programação você está aprendendo a pensar de forma a poder se expressar em qualquer que seja a linguagem de programação, mas antes de sair “programando” numa linguagem, obrigatoriamente terá de compreendê-la e dominar sua sintaxe, que pode ser algo muito mais complexo do que aparentemente parece.

#### Sintaxe da Instrução SE

Toda e qualquer instrução tem uma sintaxe, ou seja, uma forma exata como deverá ser escrita. Vamos, por assim dizer, “definir” como se descreve as sintaxes, usando para isso a instrução “Se”.

**Português Estruturado**:

```
se <condicao> entao
  <instrucao>
[ senao
  <instrucao> ]
fim-se
```

Vamos a uma série de observações:

a) Os símbolos **[]** (colchetes) indicam **opcionalidade**. Trata-se de uma parte do código que não é obrigatória, ficando a critério do programador usá-la ou não.

b) As expressões existentes entre os símbolos < > (que são chamadas popularmente de tags, devido ao seu grande uso em linguagens de hipertexto, como é o caso do HTML e suas derivadas) contêm expressões ou comandos a serem testados ou executados.


c) As palavras “reservadas” estão em negrito e não poderão jamais ser usadas como variáveis, quer seja em nossa codificação (Português Estruturado) ou nas linguagens de programação. Assim, “se” jamais poderá ser uma “variável” em nossos programas, como “if” jamais poderá ser uma variável nas linguagens Java e Pascal, como pudemos notar nos exemplos escritos naquelas duas importantes linguagens de programação.


#### Exemplos:

**Exemplo 1**:

***Tomada de decisão simples (sem senão)***

**Problema**: Imprimir "x" se este for igual a 1.

Resolução (Português Estruturado):

```
algoritmo se01;
variáveis
    x : inteiro;
fim-variáveis
início
    x := leia();
    se x = 1 então
        imprima(x);
    fim-se
fim
```

**Exemplo 2**:

***Tomada de decisão com senão***

**Problema**: Imprimir "x+1" se este for diferente de 2 ou imprima o dobro de "x", quando esse for 2.

Resolução (Português Estruturado):

```
algoritmo se02;
variáveis
    x : inteiro;
fim-variáveis
início
    x := leia();
    se x <> 2 então
        imprima(x + 1).
    senão
        imprima(x * 2);
    fim-se
fim
```

**Exemplo 3**:

***Solução parcial para a questão da equação do segundo grau**

**Problema**:  dada uma expressão do tipo “ax² + bx + c = 0", indique se é possível calcular o valor de x

Resolução (Português Estruturado):

```
algoritmo se02;
variáveis
    x1, x2, delta, raiz : real;
    a, b, c : inteiro;
fim-variáveis
início
    x1 := 0;
    x2 := 0 ;
    delta := 0;
    raiz := 0;
    a := leia();
    b := leia();
    c := leia();
    se a = 0 então
        imprima("Não existe raiz");
    fim-se;
    delta := b*b - 4*a*c;
    se delta < 0 então
        imprima("A equação não tem raízes reais");
    senão
        imprima("A equação tem raízes reais");
    fim-se
fim
```

#### Tabela Verdade

Vamos considerar termos duas variáveis "a" e "b", mas que em vez de valores, tenham conteúdos booleanos, ou seja, assumem apenas situação de verdadeiro ou falso. Podemos fazer uma analogia com um trem, que tem a frente um desvio. Uma baliza (ou flag, se usarmos seu sinônimo em inglês) vai definir o destino desse hipotético trem.

Supondo que nosso trem esteja partindo de Paris, mas num entroncamente é decididido se ele irá para Roma ou pra Berlim. Se esse entrocamento for uma variável, "a" por exemplo, podemos definir que sempre que "a" for Verdade, então o trem irá para Roma. Em caso contrário, irá para Berlim.

Todavia, podemos inserir novas variáveis. Por exemplo, uma variável "b" que quando o trem não for para Roma, permita decidir se seu destino será Berlim ou Praga. E assim sucessivamente.

Além disso, podemos incluir as palavras "E", para indicar que uma condição somente estará satisfeira se duas premissas forem simultaneamente e verdadeiras ou "OU" que indica que uma condição estará satisfeita, qunado ao menos uma das condições for verdadeira.

Voltando ao nosso hipotético trem, poderíamos dizer que ele irá para Roma se “a” E “b” forem simultaneamente verdadeiros. Quando um dos dois for falso, poderíamos estabelecer que se “a” for falso E “b” verdadeiro, então vamos para Berlim. Já se “a” for falso E “b” verdadeiro, então vamos para Praga. Teríamos agora a possibilidade de incluir um novo destino a nosso hipotético trem: Bratislava. Esse seria o destino, na hipótese de “a” E “b” serem ambas falsas, simultaneamente.

O mesmo raciocínio se aplica a palavra “OU”. Todavia, seu uso é bem distinto. Vamos imaginar que um vendedor seja recompensado com um bônus, quando tiver feito mais de 50 visitas no mês ou quando tiver vendido além da meta. Se considerarmos “a” uma variável booleana que tenha como conteúdo “Verdade” se o vendedor fez mais de 50 visitas ou “Falso” quando tiver feito 50 ou menos visitas e “b” de forma análoga, mas relativa a meta comercial, teríamos:

* Se “a” verdade e “b” falso (visitou mais de 50, mas não atingiu a meta) então bônus.

* Se “a” falso e “b” verdade (visitou 50 ou menos, mas atingiu a meta) então bônus.

* Se “a” e “b” verdadeiros (visitou mais de 50 e atingiu a meta) então bônus.

* Se “a” e “b” falsos (nem visitou mais de 50 e também não atingiu a meta) então sem bônus.

Ou seja, somente numa condição nosso vendedor não receberá seu bônus.

Para facilitar a compreensão costumamos pensar nessas situações de maneira mais geral, sem trens ou vendedores...

Usamos, então, uma tabela genérica, que chamamos de Tabela Verdade, conforme a que é apresentada adiante:

<table>
    <thead>
        <tr>
            <th>a</th>
            <th>b</th>
            <th>a E b</th>
            <th>a OU b</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Verdade</td>
            <td>Verdade</td>
            <td>Verdade</td>
            <td>Verdade</td>
        </tr>
        <tr>
            <td>Verdade</td>
            <td>Falso</td>
            <td>Falso</td>
            <td>Verdade</td>
        </tr>
        <tr>
            <td>Falso</td>
            <td>Verdade</td>
            <td>Falso</td>
            <td>Verdade</td>
        </tr>
        <tr>
            <td>Falso</td>
            <td>Falso</td>
            <td>Falso</td>
            <td>Falso</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Exemplo de tabela verdade</td> 
        </tr>
    </tfoot>
</table>

