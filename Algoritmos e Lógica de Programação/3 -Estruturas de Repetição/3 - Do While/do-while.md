# O Laço ```do...while``` (Faça...Enquanto)

É uma variação do ```while```. A única diferença é que a condição é verificada **no final** da repetição. Isso garante que o bloco de código seja executado **pelo menos uma vez**, mesmo que a condição inicial seja falsa.

**Quando usar**: Em menus de opções, onde você precisa mostrar o menu pelo menos uma vez antes de perguntar se o usuário quer sair.

**Sintaxe**:

```js
do {
    // Bloco de código
} while (condição);
```

**Exemplo Prático:** Um menu simples.

```js
let opcao;

do {
    console.log("\n--- Menu ---");
    console.log("1 - Ver Saldo");
    console.log("2 - Sair");
    opcao = prompt("Escolha uma opção: ");

    if(opcao === '1') {
        console.log("Seu saldo é de R$ 100,00.");
    }
} while (opcao !== '2'); // O laço continua quanto a opção NÃO for '2'

console.log("Obrigado por usar o sistema!");
```