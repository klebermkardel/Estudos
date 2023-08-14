# Fundamentos do C#

## Alto e baixo nível

### Definições

- Ao enviar uma instrução ao computador estamos falando em nível de máquina
- Estas instruções sempre serão no formato binário
- Quanto mais detalhada a necessidade, mais baixo o nível
- As linguagens mais modernas como C# e Java são consideradas de alto nível

### Exemplo

- Código em Assembly, uma linguagem de baixo nível:

```
    global _start

    section .text
_start: mov rax, 1
    mov rdi, 1
    rsi, message
    mov rdx, 13
    syscall
    mov rax, 60
    xor rdi, rdi
    syscall

    section .data
message: db "Hello, World", 10
```

- Código em C#, uma linguagem de alto nível:

```
namespace ConsoleAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, Wolrd");
        }
    }
}
```

- Justamente por este motivo, optamos por linguagens de alto nível, por fornecer um acesso à tudo que precisamos a nível de hardware já pronto.



