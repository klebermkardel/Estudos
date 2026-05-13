# Tipos de Dados: String, Number, Boolean

No JavaScript, cada valor tem um **Tipo de Dado**. Entender isso evita que você tente, por exemplo, substrair um nome de um número.

**1. String (Textos)**

Representa sequências de caracteres. Elas precisam estar envolvidas por aspas (simples, duplas, ou crases).

    * **Exemplo:** ```"Basquete"```, ```'São Paulo'```, ````Estudando JS````.
    * **Uso:** Nomes, mensagens, endereços.

**2. Number (Números)**

No JavaScript, não há distinção entre números inteiros e decimais (com vírgula). Todos são do tipo ```number```.

    * **Exemplo:** ```10```, ```3.14``` (use ponto, não virgula!), ```-5```.

**3. Boolean (Boleanos)**

É o tipo mais simples: só aceita dois valores: ```true``` (verdadeiro) ou ```false``` (falso).

    * **Exemplo:** ```true```, ```false```.
    * **Uso:**: Perguntas de "sim ou não". Está chovendo? O usuário está logado? O quintal está limpo?

## O Operador ```typeof```

Como o JavaScript é uma linguagem de **tipagem dinâmica** (o tipo da variável pode mudar ou ser inferido automaticamente), às vezes precisamos perguntar ao computador: "*Ei, que tipo de dado é este?*".

Para isso, usamos o ```typeof```.

### Prática no Console

Abra o console e testes estes comandos um por um:

```js
// Testando Strings
console.log(typeof "JavaScript"); // Retorna "string"
console.log(typeof '10'); // Retorna "string" (está entre aspas!)

// Testando Numbers
console.log(typeof 10); // Retorna "number"
console.log(typeof 3.14) // Retorna "number"

// Testando Booleans
console.log(typeof true); // Retorna "boolean"
console.log(typeof (5 > 2)); // Retorna "boolean" (porque a resposta é verdadeira (true))
```

## Desafio Prático: A Mistura de Tipos

Tente realizar estas operações no console e veja o que o ```typeof``` te diz sobre o resultado.

1. **A Armadilha do Texto:**

    ```js
    let resultado = "10" + 5;
    console.log(resultado);
    console.log(typeof resultado)
    ```
    
    (*O que aconteceu aqui? O JS somou ou juntos os tetos*?)

2. O Verificador de Rotina:

Crie uma variável ```limpeiOQuintal``` e atribua ```true``` ou ```false```. Depois, use o ```typeof``` para confirmar.

3. O Número Camuflado:

O que acontece se você fizer ```typeof NaN```? (Dica: ```NaN``` significa *Not a Number*, mas o resultado do ```typeof``` vai te surpreender!)