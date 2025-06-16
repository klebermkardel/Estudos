# Laços de Repetição com Arrays

Agora que você conhece arrays e sabe como acessar seus elementos, vamos iterar sobre eles usando `for` e `forEach`.

## Exemplo com `for` tradicional:

```js
for(i = 0; i < nomes.length; i++) {
    console.log(`Nome ${i + 1}: ${nome[i]})
}
```

## Exemplo com `forEach`:

```js
nomes.forEach((nome, indice) => {
    console.log(`Nome ${indice + 1}: ${nome}`)
})
```