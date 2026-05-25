# Arrow Functions

Agora que você entendeu o modelo tradicional, o mercado de trabalho hoje usa muito uma evolução visual disso chamada **Arrow Function (Função de Seta)**.

Ela faz exatamente a mesma coisa, mas some com a palavra ```function``` e usa uma seta (```=>```) no lugar.

Olha a comparação de como ficaria a sua função de ```formatarEmpresa()``` (do tópico de introdução) nesse formato moderno:

```js
// Formato moderno (Arrow Function)
const formatarEmpresa = (nomeEmpresa, cargo) => {
    return "Vaga de " + cargo " na empresa " + nomeEmpresa
}
```

E tem um bônus: se a sua função tiver apenas uma linha de código (como esse caso), você pode sumir com as chaves ```{}``` e com a palavra ```return```. O JavaScript entende o retorno automaticamente. Olha que elegante:

```js
// Formato ultra compacto (Retorno Implícito)
const formatarEmpresa = (nomeEmpresa, cargo) => "Vaga de " + cargo " na empresa " + nomeEmpresa
```

## Cálculos Rápidos com Arrow Functions

Imagine que você quer criar um função rápida para converter os seus arremessos de três pontos na quadra em pontos de verdade.

No modelo traidicional, ficaria assim:

```js
function converterCestaDeTres(quantidade) {
    return quantidade * 3
}
```

Com a **Arrow Function** de linha única, você condensa tudo isso em uma única linha ultra limpa:

```js
const converterCestaDeTres = quantidade => quantidade * 3

// Chamando a função igualzinho antes
console.log(converterCestaDeTres(4)) // Retorna: 12
```

***Nota de sintaxe:*** Reparou que sumiu os parênteses em volta de ```quantidade```? No JavaScript, se a sua Arrow Function receber **apenas um parâmetro**, você pode omitir os parênteses. Se receber nenhum ou mais de um, eles continuam obrigatórios.