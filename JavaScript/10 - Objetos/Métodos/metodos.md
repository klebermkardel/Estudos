# Métodos: Dando "Vida" aos Objetos

Até agora, seus objetos só guardavam características (dados). Mas eles também podem guardar funções! Uma função que mora dentro de um objeto é chamada de **Método**. Ela representa uma ação que aquele objeto sabe fazer.

Para o objeto conseguir olhar e suas suas próprias características dentro desse método, nós usamos a palavra-chave ```this``` (que significa "este" ou "daqui").

```js
const atleta = {
    nome: "Kleber",
    totalArremessos: 50,
    acertos: 35,

    // Este é o método do objeto
    calcularAproveitamento(): function() {
        // O "this" avisa que estamos pegando o acerto e o total DESTE objeto
        const taxa = (this.acertos / this.totalArremessos) * 100
        return `${this.nome} tem ${taxa}% de aproveitamento nos arremessos.` 
    }
}

// Chamando o método do objeto igualzinho chamamos uma função
console.log(atleta.calcularAproveitamento())
// Resultado: "Kleber tem 70% de aproveitamento nos arremessos."
```

***!!! ATENÇÃO DE OURO !!!***: Dentro de métodos de objetos, evite usar *Arrow Functions (```=>```)* se precisar usar o ```this```. As Arrow Functions têm um comportamento especial com escopos e não conseguem enxergar o ```this``` do objeto da mesma forma que uma ```function``` tradicional.

