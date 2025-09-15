# O laço ```while``` (Enquanto)

O ```while``` é a sua escolha quando você não sabe o número exato de repetições, mas sabe qual é a condição para **continuar**. O laço executa *enquanto* a condição for verdadeira.

**Quando usar**: "Continue pedindo a senha até que o usuário acerte", "Continue processando itens até a lista ficar vazia", "Continue o jogo enquanto o jogador tiver vidas".

**Sintaxe**: 

A sintaxe é mais simples, mas exige que você controle a variável manualmente.

```while ( condicao ) { ... }```

1. A **inicialização** da variável de controle deve ser feita antes do ```while```.

2. A **condição** é verificada antes de cada repetição.

3. O **incremento** (ou a alteração que fará a condição se tornar falsa) deve ser feito **dentro** do bloco de código.

**Exemplo Prático**: Simular um jopo de "adivinhe o número".

```js
let numeroMagico = 7;
let palpite = 0;

// Enquanto o palpite for diferente do número mágico...
while (palpite !== numeroMagico) {
    palpite = Number(prompt("Adivinhe o número mágico (1-10): "));

    if(palpite !== numeroMagico) {
        console.log("Errado! Tente novamente.");
    }
}

console.log("Parabéns! Você acertou!");
```

Esse código pode rodar 1 vez, 5 vezes ou 100 vezes. Ele só para quando a condição ```palpite !== numeroMagico``` se torna ```false```.


