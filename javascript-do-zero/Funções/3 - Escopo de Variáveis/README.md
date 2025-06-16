# Escopo de Variáveis

O escopo define onde uma variável "vive" no seu código.

Existem três tipos principais de escopo:

- **Global**: acessível em todo o código.
- **De função**: acessível apenas dentro da função.
- **De bloco**: acessível apenas dentro de blocos ```{}``` com ```let``` ou ```const```.

## Exemplo:

```javascript
let cor = "azul" // escopo global

function mostrarCor() {
    let cor = "vermelho"; // escopo local (da função)
    console.log(cor)
}

mostrarCor() // vermelho
console.log(cor) // azul
```