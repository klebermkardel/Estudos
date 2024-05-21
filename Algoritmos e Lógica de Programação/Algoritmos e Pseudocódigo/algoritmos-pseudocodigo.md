# Algoritmos e Pseudocódigo

## Objetivo

Entender o conceito de algoritmos, aprender a escrever pseudocódigo e praticar com exemplos simples.

## Conteúdo:

1. ***Conceito de Algoritmos***:

   * Um algoritmo é uma sequência bem definidida de passos ou instruções para resolver um problema ou realizar uma tarefa.

   * Características de um bom algoritmo:

      * **Claridade**: As instruções devem ser claras e não ambíguas.

      * **Correção**: O algoritmo deve resolver o problema corretamente.

      * **Eficiência**: O algoritmo deve utilizar recursos (tempo e espaço) de forma eficiente.

      * **Finitude**: O algoritmo deve terminar após um número finito de passos.

2. ***Representação de Algoritmos***:

   * Algoritmos podem ser representados de várias formas, como:

      * **Texto Descritivo**: Explicação em linguagem natural.

      * **Pseudocódigo**: Representação textual usando uma linguagem que se assemelha à progrmação, mas é mais simples.

      * **Diagrama de Fluxo**: Representação gráfica usando símbolos para mostrar o fluxo de execução.

3. ***Pseudocódigo***:

   * O pseudocódigo é uma maneira de escrever algoritmos usando uma linguagem simplificada que se aproxima da linaguagem de programação, mas sem seguir regras sintáticas estritas.

   * É utilizado para planejar algoritmos antes de escrever o código real.

4. ***Estrutura do Pseudocódigo***:

   * **Início e Fim**: Marcar o início e o fim do algoritmo.
   
   * **Declaração de Variáveis**: Indicar as variáveis que serão utilizaadas.

   * **Atribuições**: Definir valores para variáveis.

   * **Entradas e Saídas**: Receber entradas do usuário e exibir saídas.

   * **Estruturas de Controle**: Condicionais (se-então-senão) e loops (enquanto, para);

## Exemplos Práticos:

1. **Algoritmo para Calcular a Média de Três Números**:

  **Pseudocódigo**:

  ```
  Início
    Declarar x, y, z, média como números
    Escrever "Digite o primeiro número:"
    Ler x
    Escrever "Digite o segundo número:"
    Ler y
    Escrever "Digite o terceiro número:"
    Ler z
    média = (x + y + z) / 3
    Escrever "A média é:", média
  Fim
  ```

2. **Algoritmo para Verificar se um Número é Par ou Ímpar**:

  **Pseudocódigo**:

  ```
  Início
    Declarar número como inteiro
    Escrever "Digite um número:"
    Ler número
    Se número % 2 == 0 então
        Escrever "O número é par"
    Senão
        Escrever "O número é impar"
  Fim
  ```

3. **Algoritmo para Encontrar o Maior de Dois Números:

  **Pseudocódigo**:

  ```
  Início
    Declarar a, b como números
    Escrever "Digite o primeiro número:
    Ler a
    Escrever "Digite o segundo número:"
    Ler b
    Se a > b entõ
        Escrever "O maior número é:", a
    Senão
        Escrever "O maior número é:", b
  Fim  
  ```

4. **Algoritmo para Calcular a Soma dos Números de 1 a N:**

  **Pseudocódigo:**:

  ```
  Início
    Declarar n, soma, i como inteiros
    Escrever "Digite o valor de n:"
    Ler n
    soma = 0
    Para i de 1 até n faça
        soma = soma + i
    Escrever "A soma dos números de 1 a", n, "é:", soma
  Fim
  ```