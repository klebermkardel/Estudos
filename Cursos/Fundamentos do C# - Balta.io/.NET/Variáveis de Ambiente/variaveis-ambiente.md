# Fundamentos do C#

## Variáveis de Ambiente

### Definições

- É comum termos vários ambientes para nossas aplicações
    - Desenvolvimento
    - Homologação
    - Produção
- Cada ambiente possui suas configurações
    - Chaves de acesso externo
    - Conexões com bancos de dados
- Desta forma, podemos dizer ao .NET qual ambiente estamos utilizando
    - dotnet run --environment=$SEU_AMBIENTE
        - dotnet run --environment=development
        - dotnet run --environment=production
- O comando run não executa depuração (Debug)
    - Neste modo sua aplicação não vai parar nos Break Points (Explicado adiante)