# O primeiro contato: ```setTimeout```

A forma mais simples de ver o assincronismo funcionando é com a função nativa ```setTimeout()```. Ela serve para adiar a execução de uma função por um determinado tempo (em milissegundos, onde 1000ms = 1 segundo).

Veja esse exemplo e tente adivinhar a ordem que as mensagens vão aparecer no console.

```js
console.log("1. Primeiro passo: Ligando os motores da nave")

// Pede para o JS esperar 2 segundos antes de rodar o miolo.
setTimeout(() => {
    console.log("2. Segundo passo: Salto espacial concluído!")
}, 2000)

console.log("3. Terceiro passo: Computador de bordo atualizado.")
```

## O que aconteceu no terminal?

Se o JavaScript fosse 100% sincrono, ele travaria na linha 4 por 2 segundos e a ordem seria ```1, 2, 3```. Mas como o ```setTimeout``` é assíncrono, a ordem real na tela é:

```plaintext
1. Primeiro passo: Ligando os motores da nave.
3. Terceiro passo: Computador de bordo atualizado.
 (Espera 2 segundos...)
2. Segundo passo: Salto espacial concluído!
```

O JavaScript jogou a função do tempo para o "segundo plano" (o navegador ou o Node se encarregam de contar o tempo) e continuou o rodando o resto do código sem travar!