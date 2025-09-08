# Funções

## Para que servem as Funções?

Imagine que você está cozinhando e precisa espremer laranjas várias vezes durante a receita. Em vez de pegar uma laranja, cortar, espremer com a mão, limpar a bagunça toda vez, você uma uma máquina: um espremedor de laranjas.

Em programação, uma **função** é exatamente isso: uma "máquina" reutilizável que realiza uma tarefa específica.

**As 3 grandes vantagens de usar funções são:**

1. **Reutilização de Código (Princípio DRY)**: Você escreve a lógica uma vez e pode "chamar" (usar) essa função quantas vezes quiser em qualquer parte do seu programa.

2. **Organização**: Funções permitem que você quebre um programa grande e complexo em pedaços menores, nomeados e mais fáceis de entender. Em vez de um script gigante, você terá várias "máquinas", cada um com seu propósito.

3. **Abstração**: Você não precisa saber os detalher de *como* o espremedor funciona por dentro. Você só precisa saber que, se colocar uma laranja, ele te devolve suco. Funções escondem a complexidade.

## A Sintaxe das Funções

Existem duas formas principais de escrever funções em JavaScript moderno.

1. **Declaração de Função (A forma clássica)

É a sintaxe mais tradicional.

```js
function nomeDaFuncao(parametro1, parametro2) {
    // Corpo da função: o código que executa a tarefa
    // ...
    return resultado; // Opcional: o valor que a função "devolve"
}
```

* ```function```: Palavra-chave que inicia a declaração.
* ```nomeDaFuncao```: O nome que você dá à sua "máquina".
* ```()```: Parênteses que contêm os **parâmetros**. Parâmetros são as "entradas" ou "ingredientes" que a sua função precisa trabalhar.
* ```{}```: O corpo da função, onde a mágina acontece.

**Exemplo Prático**: Uma função que soma dois números.

```js
// 1. Declarando a função (construindo a máquina)
function somar(numeroA, numeroB) {
    const resultado = numeroA + numeroB;
    return resultado;
}

// 2. Chamando a função (usando a máquina)
let valorSoma = somar(5, 10); // Passamos 5 e 10 como "ingredientes (parâmetros)"
console.log(valorSoma); // Saída: 15

let outraSoma = somar(100, 50);
console.log(outraSoma); // Saída: 150
```

2. **Arrow Function (A forma moderna):**

```js
const nomeDaFuncao = (parametro1, parametro2) => {
    // Corpo da função
    // ...
    return resultado;
}
```

**Exemplo Prático com Arrow Function**:

```js
const somar = (numeroA, numeroB) => {
    const resultado = numeroA + numeroB;
    return resultado;
};

console.log(somar(10, 5)); // Saída: 15

// Se a função tem apenas UMA linha que é o 'return', podemos simplificar ainda mais:
const subtrair = (numeroA, numeroB) => numeroA - numeroB;

console.log(subtrair(20, 5)); // Saída: 15
```