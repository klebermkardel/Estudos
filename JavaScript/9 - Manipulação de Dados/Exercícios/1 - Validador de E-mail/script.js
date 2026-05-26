/*

Validador de E-mail corporativo: Crie uma função que receba um e-mail. Ela deve limpar os espaços em branco e checar se o e-mail termina com @tech.com. Devolva true ou false. (Dica: pesquise sobre o método .endsWith() ou use uma lógica com o que já sabe).

*/

// Arrow function que higieniza e valida se o domínio do e-mail é corporativo (@tech.com)
const validarEmail = (email) => {
    // Remove os espaços em branco das extremidades da string informada
    const emailFormatado = email.trim();

    // Avalia se a string termina estritamente com o sufixo desejado (.endsWith())
    // e define a mensagem de retorno usando o operador ternário
    const emailValido = emailFormatado.endsWith("@tech.com") 
        ? `O e-mail ${emailFormatado} é um e-mail válido` 
        : `O e-mail ${emailFormatado} não é um e-mail válido`;
    
    return emailValido;
};

// Executa o teste exibindo o veredito no console
console.log(validarEmail("   kleber@tech.co  ")); // E-mail não é valido
console.log(validarEmail("  kleber@tech.com  ")); // E-mail válido