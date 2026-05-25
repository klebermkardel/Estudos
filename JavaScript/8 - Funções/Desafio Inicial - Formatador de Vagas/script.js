/*

Desafio Inicial: O Formatador de Vagas

Para você testar a mecânica do return e dos parâmetros no seu VS Code, vamos criar o seu primeiro bloco reutilizável.

O que fazer:

1. Declare uma função chamada formatarEmpresa.

2. Essa função deve receber dois parâmetros: nomeEmpresa e cargo.

3. Dentro da função, junte esses dados usando o return para devolver uma string bonita.

4. Exemplo de retorno esperado: "Vaga de [cargo] na empresa [nomeEmpresa]"

5. Fora da função, chame ela passando os argumentos ("Google", "Desenvolvedor Júnior") e guarde o resultado em uma constante.

6. Dê um console.log nessa constante para ver o texto formatado aparecer na tela.

*/

// Declara a função passando dois parâmetros (variáveis locais de entrada)
function formatarEmpresa(nomeEmpresa, cargo) {
    // Retorna a string processada para fora da função e encerra sua execução
    return "Vaga de " + cargo + " na empresa " + nomeEmpresa;
}

// Invoca a função passando os argumentos do tipo string e armazena o retorno em uma constante
const vagaFormatada = formatarEmpresa("Google", "Desenvolvedor Júnior");

// Exibe o resultado final armazenado no console
console.log(vagaFormatada);