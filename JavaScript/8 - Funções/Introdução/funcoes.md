# O que é uma Função?

Vamos abrir o capô das **Funções** (```functions```) do jeito que você gosta: de forma intuitiva, prática e direta ao ponto.

Pense numa função como uma **máquina de fábrica** ou uma receita de **bolo automatizada**.

Até agora, seu código rodava de cima para baixo uma vez só. Uma função permite que você "isole" um bloco de código, dê um nome para ele e guarde na memória. Esse código fica lá, quietinho, e **só roda quando você chamar o nome dele.**

Imagine um botão no controle do vídeogame: o código para o personagem "pular" está escrito dentro de uma função. Toda vez que você aperta o botão, você está chamando aquela função.

## A Anatomia de uma Função Tradicional

Para criar uma função, usamos a palavra-chave ```function```, damos um nome descritivo (em camelCase, igual às variáveis) e abrimos parênteses e chaves:

```js
// 1. Declarando a função (A máquina)
function saudarUsuario() {
    console.log("Olá, Kleber! Bom dia.")
}

// 2. Invocando/Chamando a função (apertando o botão)
saudarUsuario()
```

Se você não colocar a linha ```saudarUsuario()```, a máquina fica desligada e nada aparece no console.

## Deixando a Máquina Inteligente: Parâmetros e Argumentos

A função acima é um poucp "burra" porque ela sempre faz exatamente a mesma coisa. Para deixá-la dinâmica, nód podemos criar **entrada de dados**, que na programação chamamos de **Parâmetros**.

Pense no parâmetro como uma variável que só existe dentro daquela função.

Olha que diferença:

```js
// O 'nome' dentro dos parênteses é o PARÂMETRO (a gaveta vazia)
function saudarPersonalizado(nome) {
    console.log("Olá, " + nome + "! Pronto para o treino?")
}

// O teto que passamos na chamada é o ARGUMENTO (o que vai dentro da gaveta)
saudarPersonalizado("Kleber") // Retorna: Olá, Kleber! Pronto para o treino?
saudarPersonalizado("Carlos") // Retorna: Olá, Carlos! Pronto para o treino?
```

## O Conceito Mais Importante: O Retorno (```return```)

Muitas vezes você não quer que a função apenas jogue algo no ```console.log```. Você quer que ela faça um cálculo e **devolva** o valor para você usar em outra parte do seu código. É ai que entra a palavra-chave ```return```.

O ```return``` faz duas coisas:

    1. Cospe o resultado da função para fora dela.

    2. **Para a execução da função imediatamente** (nada que estiver abaixo do ```return``` dentro daquela função será executado).

```js
function calcularPontos(cestaDeDois, cestaDeTres) {
    let total = (cestaDeDois * 2) + (cestaDeTres * 3)
    return total // Devolve o número calculado para quem chamou
}

// Guardamos o "retorno" da função dentro de uma variável externa
const pontuacaoFinal = calcularPontos(4, 2) // (4 * 2) + (2 * 3) = 14

console.log("O total de pontos no jogo foi: " + pontuacaoFinal) // Mostra 14
```