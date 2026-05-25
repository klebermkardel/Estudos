# O que são variáveis?

Imagine que variáveis são **caixas** onde você guarda informações para usar mais tarde. Cada caixa tem um **nome** (o rótulo) e um **valor** (o conteúdo).

1. ```var``` (O jeito antigo)

Foi a única forma de criar variáveis por muito tempo. Hoje, **quase não é usada** em projetos modernos porque ela é "bagunçada". Ela permite que você crie duas variáveis com o mesmo nome sem reclamar, o que gera muitos bugs.
 
    * **Regra de ouro**: Evite usar "var".

2. ```let``` (A caixa flexível)

O ```let``` é usado para valores que **podem mudar** ao longo do tempo.

    * **Exemplo**: Sua idade, o saldo da conta ou a pontuação de um jogo.

    * Você declara uma vez e pode reatribuir o valor depois.

3. ```const``` (A caixa lacrada)

Vem de "Constante". É usada para valores que **nunca mudam** após serem definidos.

    * **Exemplo**: Seu CPF, sua data de nascimento ou o valor de PI (3,14).

    * Se você tentar mudar o valor de uma const, o JavaScript vai dar um erro. É excelente para segurança do código.

## Prática: Transformando seu dia em código

Vamos usar o que você aprendeu e aplicar na sua rotina (como o basquete e o estudo que você mencionou). No seu console, digite e teste:

```js
// 1. Uma constante: seu nome não muda durante o dia
const nome = "Seu nome";

// 2. Uma variável 'let': o horário muda conforme o tempo passa
let horaAtual = "06:50";

// 3. Outra constante: o esporte que você escolheu jogar hoje
const esporte = "Basquete";

// 4. Usando as variáveis com o que aprendemos antes
console.log("Olá, meu nome é", nome);
console.log("Acordei às", horaAtual, "para jogar", esporte);

// 5. Mudando o valor da variável 'let'
horaAtual = "11:30";
console.log("Agora já são", horaAtual, "e estou estudando JS!");
```

