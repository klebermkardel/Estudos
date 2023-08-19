# Fundamentos do C#

## Linguagem de Programação - C#

### Tipo de Referência e Tipo de Valor

#### Heap e Stack

##### Definições
 
- A memória é dividida em duas partes: Heap e Stack
- Heap armazena os dados
- Stack armazena as referências para os dados

#### Tipos de Valor

##### Definições

- Qualquer tipo no .NET é tratado como
    - Tipo de Referência (Reference Type)
    - Tipo de Valor (Value Type)
- Tipos de valor armazenam dados
- São armazenados em um local da memória chamada Stack
- Quando armazenamos um valor, a memória é alocada
- Este espaço armazena o dado criado
- Nossa variável acessa este dado diretamente
- Se assimilarmos uma variável do tipo de valor a outra
    - O valor será COPIADO
    - Ambas serão independentes
- Built-in, Structs, Enums
- **Garbage Collector** não acessa o Stack

##### Exemplo 

```
int x = 25;
int y = x; // Y é uma cópia de X
Console.WriteLine(x); // 25
Console.WriteLine(y); // 25
x = 32; // Somente X foi alterado
Console.WriteLine(x); // 32
Console.WriteLine(y); // 25
```

#### Tipos de Referência

##### Definições

- Armazenam o endereço do objeto que contém os dados
- Não armazena os dados em si
- São armazenados em um local da meória chamado de Heap
- Ao assimilar uma variável
    - Criará uma referência
    - Aponta para a mesma informação
    - Não são independentes
- Quando não mais utilizados são marcado para exclusão
- **Garbage Collector** passa removendo todos eles
- Classes, Objects, Arrays...

##### Exemplo 

```
var arr = new string[2];
arr[0] = "Item 1";
var arr2 = arr; // Não cria uma cópia

Console.WriteLine(arr[0]);
Console.WriteLine(arr2[0]);

// Altera as duas listas
arr[0] = "Item Alterado";
Console.WriteLine(arr[0]);
Console.WriteLine(arr2[0]);
```