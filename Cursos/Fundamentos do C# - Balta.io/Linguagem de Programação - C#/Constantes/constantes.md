# Fundamentos do C#

## Linguagem de Programaçã - C#

### Constantes

#### Definições

- Também utilizamos uma constante para armazenar uma informação
- As constantes NÃO PODEM ser alteradas
- Feito isto elas não poderão ser modificas novamente
- Não funcionam com a utilização de var
- São mais otimizadas que as variáveis
- Recomendadas para usos frequentes
- A definição de constante é dada pela palavra reservada `const` antes do tipo
- Caso não seja informado um valor, o valor padrão será atribuido

#### Exemplo

```
const int IDADE_MINIMA; // Correto - Inicia com ZERO
const int IDADE_MINIMA = 25; // Correto - inicia com 25
const var IDADE_MINIMA = 25; // Errado
const var IDADE_MINIMA; // Errado
```

- Utilize nomes coesos
- Não utilize caracteres especiais ou espaços
- Não comece com números
- É comum vermos constantes todas em maiúsculas, separadas por "_"
- A ideia é bater o olho no código e saber que aquilo é uma constante