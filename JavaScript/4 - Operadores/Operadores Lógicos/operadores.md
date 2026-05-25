# Operadores Lógicos: &&, || e !

Como você já dominou os operadores de comparação (que devolvem ```true``` ou ```false```), os **Operadores Lógicos** são o próimo passo natural. Eles servem para combinar várias comparações em uma única sentença lógica.

Imagine que agora você não quer saber apenas se bateu a meta de estudos, mas se o seu **dia inteiro** foi produtivo foi baseado em duas condições

**1. O Operador E (```&&```) - AND**

O operador ```&&``` só retorna ```true``` se **todas** as condições forem verdadeiras. Se uma única parte for falsa, tudo vira falso.

* **Analogia:** Para jogar basquete, você precisa **ter a bola E estar na quadra**. Se faltar um dos dois, não tem jogo.

```js
const temBola = true
const estaNaQuadra = true

const temJogo = temBola && estaNaQuadra
console.log("Teremos jogo?", temJogo) // true
```

**2. O Operador OU (```||```)- OR**

O Operador ```||``` retorna ```true``` se **pelo menos uma** das condições for verdadeira. Ele só é falso se tudo for falso.

* **Analogia:** Você vai ao mercado **se precisar comprar pão OU se precisa comperar leite**. Se tiver um dos dois na lista, você vai.

```js
const precisaPao = true
const precisaLeite = false

const vaiAoMercado = precisaPao || precisaLeite
console.log("Vai ao mercado?, vaiAoMercado) // true
```

*3. O Operador NÃO (```!```) - NOT**

Este operador é o "do contra". Ele **inverte o valor booleano**. Se algo é ```true```, ele vira ```false``` e vice-versa.

```js
const quintalSujo = false
const quintalLimpo = !quintalSujo

console.log("O quintal está limpo?", quintalLimpo) // true
```