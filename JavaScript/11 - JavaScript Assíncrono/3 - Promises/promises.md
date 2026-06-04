# As Promessas do JavaScript: ```Promises```

Quando fazemos uma requisição na internet, não usamos o ```setTimeout```. Nós lidamos com uma ```Promise``` (Promessa).

Uma ```Promise``` é literalmente uma promessa de que algo vai acontecer no futuro. Ela pode ter 3 estados:

1. **Pending (Pendente)**: O garçom levou o pedido, a comida ainda está sendo feita.
2. **Fultilled/Resolved (Cumprida)**: A comida ficou pronta e deu tudo certo.
3. **Rejected (Rejeitada)**: Faltou ingrediente e o pedido foi cancelado (deu erro).

Para lidar com uma ```Promise``` da forma tradicional, nós usamos dois métodos:

- ```.then()``` (Então): Executa quando a promessa dá certo (é resolvida).
- ```.catch()``` (Pegar): Executa se a promessa der algum erro (rejeitada).

Veja a sintaxe de uma promessa fictícia na prática:

```js
// Simulando uma função que busca dos de uma API espacial e devolve uma Promise
const buscarDadosDeMarte = () => {
    return new Promise((resolve, reject) => {
        const deuCerto = true // Simulação de sucesso

        if(deuCerto) {
            resolve("Dados de Marte captados com sucesso!")
        } else {
            reject("Falha na comunicação com o satélite.")
        }
    })
}

// Como consumimos a Promessa:
buscarDadosDeMarte()
    .then(resposta => console.log(resposta)) // Se der certo, printa a resposta
    .catch(erro => console.error(erro)) // Se der erro, printa o erro
```