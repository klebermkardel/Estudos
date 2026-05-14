# Estruturas Condicionais - If/else

Agora entramos no coração da programação: o **Controle de Fluxo**. Até agora, seu código era uma linha reta (executava tudo de cima a baixo). Com o ```if``` e o ```else```, você cria ***bifurcações*. O código passa a tomar caminhos diferentes baseados em condições.

**1. A Estrutura ```if``` (Se)**

O bloco ```if``` só é executado se a condição entre parênteses for ```true```.

```js
if(condicao) {
    // Código que roda se for verdadeiro
}
```

**2. A Estrutura ```else``` (Senão)**

O ```else``` é o plano B. Ele só roda se o ```if``` for ```false```.

```js
if(condicao) {
    // Caminho A
} else {
    // Caminho B
}
```

**3. O ```else if``` (Senão se)**

Usado quando você tem mais de duas opções. Você pode encadear quando precisar.

```js
if(condicao) {
    // Caminho A
} else if(outraCondicao) {
    // Caminho B
} else {
    // Caminho C
}
```

**3. Conteúdo Prático (Na pasta Prática dentro desse diretório)**

**4. Aninhamento (Nested If)**

Você pode colocar um ```if``` dentro de outro.

```js
const estudou = true
const jogouBasquete = true

if(estudou) {
    if(jogouBasquete) {
        console.log("Dia perfeito: Mente e corpo treinados!)
    } else {
        console.log("Mente treinada, mas faltou o exercício físico.")
    }
}
```
