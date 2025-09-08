# O Perigo: Loop Infinito

Um erro comum, especialmente com o ```while```, é criar um **loop infinito**. Isso acontece quando a condição do laço nunca se torna ```false```. O programa fica preso, executando o mesmo código para sempre.

**Exemplo de Loop Infinito**:

```js
let i = 0;
while(i < 5) {
    // Esquecemos de incrementar o 'i'.
    // 'i' será sempre 0, e 0 é sempre < 5.
    console.log("Preso para sempre");
}
```