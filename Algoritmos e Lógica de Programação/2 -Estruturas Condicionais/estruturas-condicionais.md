# Estruturas Condicionais

## Parte Teórica:

* Lógica Booleana: O resultado de uma condição é sempre ```true``` ou ```false```.

* Operadores de Comparação: ```==``` (igual), ```==``` (estritamente igual), ```!=``` (diferente), ```!===``` (estritamente diferente), ```>``` (maior que), ```<``` (menor que), ```>=``` (maior ou igual), ```<=``` (menor ou igual).

* Operadores Lógicos: 

 * ```&&```: Verdadeiro se **ambas** as condições forem verdadeiras.
 * ```||```: Verdadeiro se **pelo menos uma** condição for verdadeira.
 * ```!```: inverte o valor booleano.

 Pense nas estruturas condicionais como as **bifurcações de uma estrada**. O seu programa chega a um ponto e precisa decidir qual caminho seguir com base em uma condição (uma pergunta que só pode ser respondida com ```true``` ou ```false```).

 1. A estrutura ```if``` (Se)

 É a estrutura mais simples. Ela executa um bloco de código **apenas se** uma condição for verdadeira. Se a condição for falsa, o bloco de código é simplesmente ignorado e o programa continua.

Síntaxe:

```js
if (condicao) {
    // Este bloco de código só é executado
    // se a 'condicao' for verdadeira (true).
}
```

**Exemplo Prático:** Verificar se uma pessoa é maior de idade.

```js
const idade = 20;

if (idade >= 18) {
  console.log("A pessoa é maior de idade. Pode entrar na festa.");
}

console.log("O programa continua aqui...");
```

*Neste caso*, como ```20 >= 18``` é  ```true```, a mensagem será impressa.

2. A estrutura ```if...else``` (Se...Senão)

Aqui temos a bifurcação completa: um caminho para o ```true``` e o outro para o ```false```. Se a condição for verdadeira, o bloco ```if``` é executado. **Senão** (se for falsa), o bloco ```else``` é executado.

Síntaxe:

```js
if (condicao) {
    // Executando se a condição for verdadeira.
} else {
    // Executando se a condição for falsa.
}
```

**Exemplo Prático**: Completando o exemplo anterior

```js
const idade = 15;

if (idade >= 18) {
    console.log("Maior de idade. Pode entrar.");
} else {
    console.log("Menor de idade. Entrada não permitida");
}
```

*Agora*, como ```15 >= 18``` é ```false```, o código dentro do bloco ```else``` será executado.

3. A estrutura ```if...else if...else```

E se tivermos mais de duas possibilidades? Usamos o ```else if``` para criar uma cadeira de verificações. O programa verifica as condições em ordem. Na primeira que for ```true```, ele executa o bloco correspondente e ignora todo o resto da cadeia.

Sintaxe:

```js
if (condicao1) {
    // Executado se a condicao1 for verdadeira.
} else if (condicao2) {
    // Executado se a condicao1 for falsa E a condicao2 for verdadeira.
} else {
    // Executado se NENHUMA das condições anteriores forem verdadeiras.
}
```

**Exemplo Prático:** O exercício das notas do aluno.

```js
const nota = 6.5;

if (nota >= 7) {
    console.log("Aprovado!");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado.");
}
```

O progrma verifica: ```6.5 >= 7``` ? Falso. Ele pula para a próxima: ```6.5 >= 5``` Verdadeiro. Ele executa o bloco ```console.log("Recuperação.")``` e ignora o ```else``` final.

4. A estrutura ```switch``` (Uma alternativa)

O ```switch``` é útil quando você quer comparar o valor de uma **uma única variável** com várias possibilidades diferentes. É como um ```if...else if``` mais organizado para casos específicos.

Sintaxe:

```js
switch (variavel) {
    case valor1:
        // Código a ser executado se variavel === valor1
        break; // O 'break' é crucial para sair do switch.
    case valor2:
        // Código a ser executado se variavel === valor2
        break;
    default:
        // Código a ser executado se nenhum dos casos acima corresponder.
        // É como o 'else' final.
}
```

**Exemplo Prático**: Verificar o dia da semana por um número.

```js
const diaDaSemana = 3; // 1 = Domingo, 2 = Segunda, 3 = Terça ...

switch (diaDaSemana) {
    case 1:
        console.log:("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    // ,,, outros casos para 4, 5, 6, 7
    default:
        console.log("Dia inválido");
}
```

*Neste caso*, o programa vai pular direto para o ```case 3``` e imprimir "Terça".

