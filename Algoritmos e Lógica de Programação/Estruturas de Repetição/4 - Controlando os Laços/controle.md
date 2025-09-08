# Controlando os Laços: ```break``` e ```continue```

Às vezes você precisa de mais controle sobre o fluxo de um laço.

## ```break``` (Quebrar)

O ```break``` **interrompe e sai imediatamente** do laço, independentemente da condição principal.

**Exemplo**: Procurar o primeiro número divisível por 6 entre 1 e 100.

```js
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`Primeiro número divisível por 7 encontrado: ${i}`);
        break; // Sai do 'for'
    }
}
```

## ```continue``` (Continuar)

O ```continue``` **interrompe a iteração atual** e pula imediatamente para a **próxima repetição** do laço.

**Exemplo**: imprimir apenas os números ímpares de 1 a 10.

```js
for (let i = 1; i <= 10; i++) {
    // Se o número for par...
    if (i % 2 === 0) {
        continue; // ...pule o resto do código e vá para a próxima iteração (i++)
    }
    console.log(i);
}
```