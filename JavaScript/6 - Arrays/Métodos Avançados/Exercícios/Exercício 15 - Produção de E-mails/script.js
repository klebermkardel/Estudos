/*

Exercício 15: Esteira de Produção de E-mails (Method Chaining Completo)
Contexto: Você tem uma lista de nomes de profissionais. Você quer transformá-los em letras minúsculas (usando .toLowerCase()), gerar um formato de e-mail corporativo adicionando @tech.com no final de cada um, e exibir o e-mail final na tela.

O Desafio:

1. Crie o array const nomesResumidos = ["KLEBER", "CARLOS", "MARCOS"].

2. Crie uma esteira usando .map() conectado a um .forEach().

3. O .map() vai transformar os nomes em minúsculos e concatenar com a string do e-mail (Ex: nome.toLowerCase() + "@tech.com").

4. O .forEach() conectado logo em seguida vai pegar cada e-mail gerado e dar um console.log("E-mail enviado para: " + email).

*/

// Array inicial com os nomes em caixa alta coletados do sistema anterior
const nomesResumidos = ["KLEBER", "CARLOS", "MARCOS"];

// PROCESSAMENTO EM ESTEIRA:
// 1. O .map() transforma os nomes em minúsculo (.toLowerCase()) e anexa o domínio do e-mail.
// 2. O .forEach() intercepta o array resultante e dispara a mensagem no console para cada e-mail.
nomesResumidos
    .map(nome => nome.toLowerCase() + "@tech.com")
    .forEach(email => console.log("E-mail enviado para: " + email));