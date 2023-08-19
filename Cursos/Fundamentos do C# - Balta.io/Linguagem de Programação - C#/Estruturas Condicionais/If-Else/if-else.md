# Fundamentos do C#

## Linguagem de Programação - C#

### Estruturas Condicionais

#### Estrutura If

##### Definições

- Tradução: "SE" ou seja, "caso alguma condição seja atendida"
- Utilizado para tomada de decisões
- Utiliza os operadores lógicos

#### Estutura Else

##### Definições

- Complemento ao **if***
- Caso a condição não seja atendida
- Podemos ter
    - **else if(condicao)**
    - Não tem limites (mas cuidado)
- Podemos ter apenas **else** para executar algo caso a condição não seja atendida

##### Estrutura do If

```
if(condicao) { // Caso seja verdadeiro
    ...
}

if(condicao) // Caso seja verdadeiro
    ...      // Caso só haja uma linha, não precisa de chaves
```

##### Estrutura do If Else

```
if(condicao) { // Caso seja verdadeiro
    ...
} else { // Caso seja falso
    ...  
}

if(condicao) // Caso seja verdadeiro
    ...
else // Caso seja falso
    ...
```

##### Estrutura do If Else If Else

```
if(condicao) { // Caso seja verdadeiro
    ...
} else if (condicao) { // Senão, testa outra condicao
    ...
} else if (condicao) { // Senão, testa outra condicao
    ...
} else { // Se não acontecer nenhuma das anteriores
    ...
}
```

