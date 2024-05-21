# Calcular a Média de N Números

 * **Descrição**: Escreva um algoritmo que leia N números e calcule a média desses números.

**Pseudocódigo**:

```
Início
    Declarar, n, i como inteiros
    Declarar numero, soma, media como real
    Escrever "Digite a quantidade de números:"
    Ler n
    soma = 0
    Para i de 1 até n faça
        Escrever "Digite o ", i, "º número:"
        Ler numero
        soma = soma + numero
    media = soma / n
    Escrever "A média dos números é:", media
Fim
```