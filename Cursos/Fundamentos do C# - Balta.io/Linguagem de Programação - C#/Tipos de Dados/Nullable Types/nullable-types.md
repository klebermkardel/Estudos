# Fundamentos do C#

## Linguagem de Programaçã - C#

### Tipos de Dados
 
#### Nullabel Types

##### Definições

- Significa vazio, nada
- Diferente de zero ou uma string vazia
- Todo tipo, primitivo ou complexo pode receber o valor null
- O tipo deve ser marcado como Nullable Type
- Podemos atribuir *null* a um objeto
- Desde que o mesmo seja marcado como nullable
    - Usando ? na frente do tipo
- Se uma chamada a um valor nulo for feita um erro será apresentado

##### Exemplo

```
int? idade = null;
```