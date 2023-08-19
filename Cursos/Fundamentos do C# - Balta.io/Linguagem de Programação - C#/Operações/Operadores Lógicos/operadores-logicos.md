# Fundamentos do C#

## Linguagem de Programaçã - C#

### Operações

#### Operadores Lógicos

##### Definições

- Usado para operações condicionais
- Retorna SEMPRE verdadeiro ou falso
- E (AND)
    - Deve atender TODAS as condições
    - Sinal &&
- OU (OR)
    - Se atender uma condição já retorna verdadeiro
    - Sinal ||
- NEGAÇÃO (NOT)
    - Sinal !

##### Exemplo

```
int x = 12;
bool entre = (x > 25) && (x < 40); // False
bool ou = (x > 25) || (x < 40); // True
bool negacao = !(x < 25); // False
```