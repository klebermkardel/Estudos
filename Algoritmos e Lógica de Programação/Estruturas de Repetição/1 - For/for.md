# Estruturas de Repetição (Laços)

Até agora, nossos programas executavam uma linha de código uma única vez, de cima para baixo. Ols laços nos dão o superpoder de dizer ao computador: "Execute este bloco de código várias vez, até que uma condição seja satisfeita".

## A Teoria: Por que usar Laços?

Imagine que você precisa exibir a mensagem "Olá, mundo!" 5 vezes no console. Sem laços, você faria isso:

```js
console.log("Olá, mundo!");
console.log("Olá, mundo!");
console.log("Olá, mundo!");
console.log("Olá, mundo!");
console.log("Olá, mundo!");
```

Funciona, mas é repetitivo e ineficiente. E se você precisasse fazer isso 1.000 vezes? Seria impossível.

Um laço resolve isso de forma elegante. A ideia é definir um bloco de código e uma regra que determina quantas vezes esse bloco deve ser executado. É a automação em sua forma mais pura. É o princípio **DRY (Don't Repeat Yourself - Não se Repita) em ação.

Existem três laços principais em JavaScript, cada um ideal para um tipo de situação.

1. O laço `for`

O `for` é o laço mais comum. Ele é a sua ferramenta ideal quando você **sabe de antemão o número de vezes que precisa repetir uma tarega.**

**Quando usar**: "Repita isso 10 vezes", "Percora todos os 50 itens de uma lista", "Faça a tabuada do 5".

**Sintaxe**:

A sintaxe do `for`é dividida em três partes, separadas por ponto e vírgula, dentro de parênteses:

`for ( inicialização; condição; incremento) { ... }`

1. **Inicialização**: Executada **uma única vez** antes do laço começar. É aqui que criamos uma variável de controle (geralmente chamada de `i`, de *índice* ou *iterador*). Ex: `let i = 0;`

2. **Condição**: Verificada **antes de cada repetição**. Enquanto esta condição for `true`, o laço continua. Quando se torna `false`, o laço para. Ex: `i < 5;`

3. **Incremento**: Executado **ao final de cada repetição**. É aqui que atualizamos a variável de controle. Ex: `i++` (que é o mesmo que `i = i + 1`);

**Exemplo Prático**: Contar de 0 a 4;

```js
// (1. inicialiação)   (2. condição)   (3. incremento)
for (  let i = 0;          i < 5;            i++) {
    // Bloco de código a ser repetido
    console.log(`O número atual é ${i}`);
}
```

**Saída**:

```
O número atual é 0
O número atual é 1
O número atual é 2
O número atual é 3
O número atual é 4
```