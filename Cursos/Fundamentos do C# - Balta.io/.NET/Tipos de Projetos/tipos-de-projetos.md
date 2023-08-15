# Fundamentos do C#

## Criando um novo projeto

### Definições

- Class Library
    - O resultado final é uma DLL
    - Não possui interface
- Console Application
    - O resultado final é uma aplicação que roda no terminal
    - Pode receber dados, esperar um input do usuário
- Projeto Web
    - ASP.NET Web
    - ASP.NET MVC
    - ASP.NET WebAPI
- Projeto Testes
    - Microsoft Tests
- dotnet cli
    - dotnet new console => Novo Console Application
    - dotnet new classlib => Nova Class Library
    - dotnet new web => Novo projeto ASP.NET Core
    - dotnet net mvc => Novo projeto ASP.NET Core
    - dotnet new webapi => Novo projeto ASP.NET Core
    - dotnet new mstest => Novo projeto Microsoft Test
- Criar um projeto é o mesmo que gerar os arquivos iniciais de uma aplicação
- Vai sempre gerar os arquivos na pasta atual
- Para especificar uma pasta podemos utilizar o "-o"
    - dotnet new console -o MeuApp
    - Vai criar uma nova pasta chamada MeuApp com os arquivos dentro