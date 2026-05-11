# O que é JavaScript?

O **JavaScript (JS)** é uma linguagem de programação de alto nível, interpretada e que segue o padrão ECMAScript. De forma simples: se o HTML é a estrutura (os ossos) e o CSS é o estilo (a pele e roupas), o **JavaScript é o comportamento** (os músculos e o cérebro).

Originalmente criado para rodar apenas nos navegadores (fazendo coisas como validar formulários ou criar animações), hoje ele é onipresente:

* **Front End**: Interatividade em sites.
* **Back-end**: Servidores e APIs (com Node.js).
* **Mobile**: Aplicativos para celular (com React Native).

## Como o JS funciona?

Diferente de linguagens que precisam ser "traduzidas" (compiladas) antes de rodar, o navegador possui um **motor** (como o V8 no Chrome) que lê o código JavaScript e o executa na hora.

## O seu primeiro comando: ```console.log()```

Para aprender a programar, você precisa de uma forma de "conversar" com o computador e ver se ele está entendendo. O ```console.log()``` é a ferramenta de diagnóstico mais famosa do mundo.

### Para que serve?

Ele imprime uma mensagem ou o valor de uma variável no **console** (uma área de testes do desenvolvedor), permitindo que você verifique se o seu código está funcionando corretamente sem precisar exibir nada na interface final do site para o usuário.

### A Síntaxe

```js
console.log("Olá, mundo!")
```

* ```console```: É um objeto que dá acesso ao console de depuração do navegador.
* ```.log```: É o método (a ação) de registrar uma informação.
* ```("...")```: O conteúdo entre parênteses é o que será exibido. Textos sempre ficam entre aspas.

## Prática: Mão na massa

Não é necessário instalar nada agora. Faça o seguinte:

1. Abra qualquer site no seu navegador (como o Google).
2. Aperte **F12** (ou clique com o botão direito e vá em "Inspecionar").
3. Clique na aba **Console**.
4. Digite o código abaixo e dê Enter.

```js
console.log("Olá, mundo!");
console.log("Iniciando minha jornada em JavaScript");
console.log(10 + 5);
``` 

### O que observar:

* O primeiro e o segundo comando exibirão o texto (chamando de *String*).
* O segundo comando resolverá a conta matemática e mostrará apenas o resultado ```15```