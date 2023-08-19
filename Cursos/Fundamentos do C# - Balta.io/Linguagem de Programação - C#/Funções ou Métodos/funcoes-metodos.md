# Fundamentos do C#

## Linguagem de Programação - C#

### Funções ou Métodos

#### Definições

- Podemos segmentar nosso programa em funções
- Também conhecidos como métodos
- O **main** é um exemplo de método
- Possui um retorno, um nome e parâmetros
- Esta composição é camada de assinatura
- Começam sempre com maiúscula

#### Exemplo

```
static void Main(string[] args)
{
    // Invocação do método
    MeuMetodo("C# é legal!");
}

// Definição do método
static void MeuMetodo(string parametro)
{
    Console.WriteLine(parametro);
}

-----------

static void Main(string[] args)
{
    // Invocação do método
    // Armazena o resultado em uma variável
    var nome = RetornaNome("Kleber", "Molina Kardel");
    
    // Imprime o nome na tela
    Console.WriteLine(nome);
}

// Definição do método
// Retorna uma string e recebe vários parâmetros
static string RetornaNome(string nome, string sobrenome)
{
    // Retorna o nome e sobrenome
    return nome + " " + sobrenome;
}
```