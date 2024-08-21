# Introdução

## O que é JavaScript e Por que Usá-lo

JavaScript, comumemente abreviado como JS, é uma linguagem de programação dinâmica, interpretada e leve. Originalmente, foi projetada para adicionar interatividade às páginas da web, permitindo a criação de aplicações ricas e interativas direto no navegador do usuário.

De uma perspectiva técnic, JavaScript é uma linguagem orientada a objetos, baseada em protótipos e com suporte a programação funcional. Ela tem recursos dinâmicos que incluem construção de objetos em tempo de execução, listas de parâmetros variáveis, variáveis de função, criação dinâmica de scripts e muito mais.

Agora, vamos ao "porquê". Por que usamos JavaScript? Se tivermos que resumir em uma única palavra, a resposta seria "interatividade". Sem JavaScript, a web seria um lugar estático. A beleza de websites interativos, com animações, formulários responsivos, menus expansíveis e tudo mais que traz a página à vida, é possível graças ao JavaScript.

O JavaScript é a única linguaguem que pode ser executada no navegador, o que o torna praticamente indispensável se você deseja criar páginas da web que vão além de exibir informações estáticas. Com o JavaScript, você pode criar conteúdo que se atualiza dinamicamente, controlar mídias multimídia, animar imagens e praticamente tudo o que pode imaginar.

Além disso, o JavaScript desempenha um papel crucial em várias outras áreas além do desenvolvimento web no lado do cliente. Por exemplo, com Node.js, o JavaScript agora também pode ser usado no lado do servidor. O JavaScript também é usado para desenvolver aplicativos móveis, construir aplicações de desktop, jogos, e até mesmo na robótica. 

Em resumo, o JavaScript é uma linguagem de programação poderosa e flexível que desempenha um papel crucial na web moderna. Seja você um aspirante a desenvolvedor web ou um veterano no campo, o JavaScript é uma habilidade essencial que deve ser parte do seu arsenal de desenvolvimento.


## Breve História do JavaScript

A história do JavaScript começa em 1995, quando a Netscape Communications contratou Brendan Eich para desenvolver uma nova linguagem de programação para o seu navegador, Netscape Navigator. Eich criou a linguagem em apenas dez dias e, inicialmente, ela se chamava Mocha. 

No mesmo ano, a Netscape, buscando uma maneira de solidificar seu domínio no mercado de navegadores, decidiu se associar com a Sun Microsystems, que tinha sua própria linguagem de programação chamada Java, que estava ganhando bastante popularidade. Como resultado dessa parceria, Mocha foi renomeada para LiveScript e, eventualmente, recebeu seu nome definitivo, JavaScript, numa tentativa de tirar proveito do hype em torno do Java. 

Apesar do nome, JavaScript e Java são linguagens completamente diferentes em termos de design, filosofia e uso. A escolha do nome acabou sendo mais um movimento de marketing do que uma indicação de uma relação técnica. 

Em 1997, a Netscape submeteu o JavaScript ao Ecma International, uma organização de padrões, para garantir a interoperabilidade entre plataformas web. O Ecma International então lançou a especificação ECMA-262, que representava a padronização oficial do JavaScript, que foi renomeada para ECMAScript. Até hoje, novas versões da especificação ECMAScript continuam a ser lançadas, adicionando novos recursos e melhorando a linguagem. 

Em meados dos anos 2000, o JavaScript começou a ser usado para mais do que apenas adicionar interatividade a páginas da web. A introdução do AJAX (Asynchronous JavaScript and XML) permitiu que as páginas da web fossem atualizadas dinamicamente sem precisar serem recarregadas, o que levou a um aumento na criação de aplicações web interativas. 

A ascensão do JavaScript foi ainda mais acelerada com o lançamento de várias bibliotecas e frameworks, como jQuery, AngularJS, React e Vue.js, que simplificaram e estruturaram o desenvolvimento de aplicações JavaScript complexas. 

Além disso, em 2009, foi introduzido o Node.js, um ambiente de execução que permitiu o uso do JavaScript fora do navegador, especificamente para o desenvolvimento do lado do servidor. Isso transformou o JavaScript numa linguagem de programação universal, capaz de operar em quase qualquer plataforma ou ambiente. 

Hoje, o JavaScript é uma das linguagens de programação mais populares e amplamente utilizadas no mundo. De simples scripts de navegador a complexas aplicações web de página única, de servidores a dispositivos IoT, a influência do JavaScript no mundo da tecnologia é inegável.

## Como o JavaScript Funciona com HTML e CSS

O desenvolvimento de páginas web é geralmente baseado em três tecnologias: HTML, CSS e JavaScript. Essas três tecnologias trabalham em conjunto para criar páginas da web interativas e esteticamente agradáveis. Aqui está como elas interagem:

***HTML***

O HTML (Hypertext Markup Language) é a base de qualquer página da web. Ele é usado para estruturar o conteúdo da página e formar a "espinha dorsal" de uma página da web. O HTML define a estrutura e o conteúdo de uma página web, como textos, imagens, listas, tabelas, links, formulários e muito mais.

***CSS***

O CSS (Cascading Style Sheets) é usado para estilizar o conteúdo estruturado pelo HTML. Ele define a aparência da página, incluindo layout, cores, fontes e animações. O CSS permite que os desenvolvedores alterem a aparência de vários elementos HTML ao mesmo tempo, separando o design e o conteúdo.

***JavaScript***

O JavaScript entra em ação quando a interatividade é necessária. Enquanto HTML e CSS são linguagens de marcação usadas para estruturar e estilizar uma página da web, o JavaScript é uma linguagem de programação que permite interatividade na página. Ele pode ser usado para criar funcionalidades como menus suspensos, formulários interativos, conteúdo dinâmico e animações. 

Aqui está um exemplo simples de como o HTML, CSS e JavaScript funcionam juntos: 

HTML - Você pode criar um botão usando HTML, como:

```
<button id="myNutton"> Clique aqui </button>
```

CSS - Usando CSS, você pode estilizar esse botão, para torná-lo mais atraente, como:

```
#myButton {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
```

JavaScript - Agora, usando JavaScript, você pode fazer algo acontecer quando esse botão for clicado, como:

```
document.getElementById('myButton').addEventListener('click', 
function (){
    alert('Você clicou no botão!);
});
```

No exemplo acima, HTML é usado para criar o botão, CSS é usado para estilizá-lo e JavaScript é usado para adicionar uma ação quando o botão é clicado. Portanto, ao aprender JavaScript, é importante ter um conhecimento básico de HTML e CSS, já que essas três tecnologias são frequentemente usadas juntas no desenvolvimento web.

## Conclusão

Ao longo deste capítulo inicial, mergulhamos no mundo do JavaScript, uma poderosa linguagem de programação que é essencial no desenvolvimento web moderno. Descobrimos sua história, a natureza dinâmica da linguagem e como ela interage com outras tecnologias web, como HTML e CSS.

Entender como o JavaScript funciona é o primeiro passo para dominar o desenvolvimento web. Ele permite que os desenvolvedores criem sites interativos, dando vida a páginas estáticas com a capacidade de responder a ações do usuário, processar dados e muito mais.

Embora tenhamos apenas arranhado a superfície do que o JavaScript é capaz, este capítulo forneceu uma base sólida para começar a explorar suas aplicações mais complexas. Nos próximos capítulos, vamos aprofundar ainda mais, explorando a sintaxe, estruturas de controle, funções, objetos e muitos outros recursos que tornam o JavaScript uma ferramenta tão poderosa e flexível para os desenvolvedores web.







