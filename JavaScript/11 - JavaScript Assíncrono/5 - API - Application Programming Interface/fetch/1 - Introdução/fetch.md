# O que é uma API e o ```fetch()```?

**Uma API (Application Programming Interface)** é basicamente um garçom digital. O seu código faz um pedido para um endereço web (uma URL) e a devolve uma resposta, geralmente no formato **JSON** (que é quase idêntico a um objeto JavaScript).

O ```fetch()``` é uma ```Promise``` nativa. Quando você dispara um ```fetch()```, ele entra em estado *pendente* até que o servidor da internet responda. Por isso, nós sempre usamos ele combinado com o ```async/await```.
