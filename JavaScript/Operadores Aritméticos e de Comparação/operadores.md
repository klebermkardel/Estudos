# Operadores Aritméticos e de Comparação

Os operadores são o motor da lógica. Sem eles, os dados ficariam apenas parados na memória.

**1. Operadores Aritméticos**

São os que você já conhece da matemática, usados para cálculos:

| Operador | Operação                              | Exemplo         |
|----------|---------------------------------------|-----------------|
| `+`      | Adição (ou concatenação de strings)   | `10 + 5` // 15  |
| `-`      | Subtração                             | `10 - 5` // 5   |
| `*`      | Multiplicação                         | `10 * 5` // 50  |
| `/`      | Divisão                               | `10 / 2` // 5   |
| `%`      | Resto da Divisão (Módulo)             | `10 % 3` // 1   |
| `**`     | Exponenciação                         | `2 ** 3` // 8   |

**2. Operadores de Comparação**

Estes são fundamentais para a tomada de decisão (o conteúdo que veremos a seguir). Eles sempre resultam em um **Boolean** (```true``` ou ```false```).

    * ```==``` **(Igualdade):** Compara apenas valor (ignora o tipo.) ```"10" == 10``` é ```true```.
    * ```===``` **(Igualdade Estrita):** Compara o valor e o tipo. ```"10" === 10``` é ```false```. **(Use sempre este!)**
    * ```!=``` e ```!==```: Diferente e Estritamente diferente. 
    * ```>``` e ```<```: Maior que ou Menor que
    * ```>=``` e ```<=```: Maior ou igual / Menor ou igual
