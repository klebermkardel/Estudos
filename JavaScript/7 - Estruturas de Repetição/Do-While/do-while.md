# Estrutura de Repetição ```do...while``` (Faça, depois pergunte)

Ele é o irmão rebelde do ```while```. A única diferença é que ele **executa a ação primeiro** e só depois checa se deve continuar. Isso garante que o código rode **pelo menos uma vez**, mesmo que a condição seja falsa logo de cara.

    **Exemplo na vida real**: Você entra na quadra e arremessa a bola pro cesto uma vez (```do```). Só depois você olha para o relógio para ver se ainda tem tempo de continuar treinando (```while```).

## O Próximo Passo: O irmão do ```while```

Agora que você dominou o ```while``` tradicional, vamos ver o ```do...while```.

Lembra que eu te falei que ele **executa a ação primeiro** e só depois pergunta se deve continuar?

```js
let segundos = 0

// O JavaScript entra aqui e SEM olhar a condilção primeiro
di {
    console.log("Isso vai rodar pelo menos uma vez")
} while (segundos > 0) // Só aqui no final ele heca. Como 0 não é > 0, ele para.
```