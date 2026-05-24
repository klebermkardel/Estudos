# Conectando os Mundos: O casamentre entre ```for``` e Arrays

Agora que você já sabe como o ```for``` conta números, você está pronto para ver o motivo real dele ser o queridinho dos programadores: **varrer listas automaticamente**.

Lembra que aprendemos que o ```.length``` dá o tamanho do array e que os índices começam no zero? Juntamos isso dentro do ```for```;

Olha que estrutura fantástica:

```js
const series = ["Breaking Bad", "Dark", "Sucession"]

// O 'i' começa em 0 (primeiro índice) e roda ENQUANTO for MENOR que o tamanho da lista (3)
for(let i = 0; i < series.length; i++) {
    console.log("Assisti: " + series[i])
}
```

## Por que a condição ```i < series.length``` (menor) e não ```i <=``` (menor ou igual)?

Como a lista tem 3 itens, os índices válidos são ```0, 1 e 2```.

Se usássemos ```<=```, o ```for``` tentaria buscar o índice ```3```. Como o índice 3 não existe, ele exibiria um maldito ```undefined``` na tela. Usando apenas o ```<```, ele para perfeitamente no 2!