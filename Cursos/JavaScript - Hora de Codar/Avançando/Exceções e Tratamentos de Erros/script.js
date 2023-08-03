// Avançando em JavaScript

// Exceções e Tratamento de Erros
const idade = 15;

// Para execução do programa exibindo a mensagem de erro
// Muito utilizado para criar regras de negócio
// if(idade < 18) {
//     throw new Error("Você ter pelo menos 18 anos!");
// }

// Exibe mensagem de erro para o usuário sem parar execução do programa
try {
    const idade = 15;
    if(idade < 18) {
        throw new Error("Você ter pelo menos 18 anos!");
    }
} catch (error) {
    console.log(error.message);
}

console.log("continuando o programa...");