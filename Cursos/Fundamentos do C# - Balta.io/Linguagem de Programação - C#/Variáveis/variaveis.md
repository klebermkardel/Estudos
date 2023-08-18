# Fundamentos do C#

## Linguagem de Programação - C#

### Variáveis

#### Definições

- Uma variável é algo que utilizamos para armazenar uma informação
- Ser variável significa que seu valor pode ser alterado a qualquer momento
- Ou seja, ele pode variar
- Sempre que "criamos" uma variável, dizemos que estamos inicializando ela

- Podemos usar um TIPO ou a palavra reservada `var` para criar uma variável
- Vamos aprender ainda sobre tipo de dados
- No C# o tipo vem sempre antes do nome da variável
- Podemos informar um valor já na criação da variável
- Se não informado o valor padrão será aplicado

#### Exemplo

```
int idade; // Correto - inicia com ZERO
int idade = 25; // Correto - inicia com 25
var idade = 25; // Correto - inicia com 25
var idade; // Errado
```

- Utilize nomes coesos
- Não utilize caracteres especiais ou espaços
- Não começa com números
- A primeira letrada de cada palavras é SEMPRE minúscula