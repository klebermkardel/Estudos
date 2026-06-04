/*

O Simulador de Autenticação (Base: Promises e Async/Await)

Cenário: Para fechar com chave de ouro, vamos simular a tela de login de um aplicativo que valida as credenciais em um banco de dados remoto.

1. Copie esta função que simula a validação do banco (ela demora 1.5 segundos para responder):

const verificarCredenciaisNoBanco = (usuario, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "kleber.dev" && senha === "123456") {
                resolve("Acesso concedido! Bem-vindo ao sistema. 🔓");
            } else {
                reject("Acesso negado: Usuário ou senha incorretos. ❌");
            }
        }, 1500);
    });
};

2. Crie uma função assíncrona (async) chamada fazerLogin(user, password).

3. Abra uma estrutura try/catch dentro dela.

4; No try, use o await para chamar a função verificarCredenciaisNoBanco(user, password) e exiba o resultado de sucesso no console.

5. No catch, capture o erro e exiba a mensagem de falha no console.

6. Teste a sua função duas vezes no final do arquivo: uma passando os dados certos para ver o sucesso, e outra passando dados errados para testar o erro.

*/

// Função simuladora de infraestrutura de banco de dados (Retorna uma Promise com atraso de 1.5s)
const verificarCredenciaisNoBanco = (usuario, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "kleber.dev" && senha === "123456") {
                resolve("Acesso concedido: Bem-vindo ao sistema.");
            } else {
                reject("Acesso negado: Usuário ou senha incorretos.");
            }
        }, 1500);
    });
};

// ASYNC: Habilita o comportamento assíncrono moderno e o uso de travas controladas (await)
const fazerLogin = async (user, password) => {
    // TRY: Envolve a tentativa de requisição externa sujeita a falhas de rede/validação
    try {
        // AWAIT: Bloqueia a linha atual até a Promise ser cumprida (resolve)
        const usuarioAutenticado = await verificarCredenciaisNoBanco(user, password);

        // Imprime o texto injetado no resolve() da Promise
        console.log(usuarioAutenticado);
    } catch (error) {
        // CATCH: Captura e trata o erro injetado no reject() da Promise
        console.error(error);
    }
};

// Execução dos testes controlados
fazerLogin("kleber.dev", "123456"); // Cenário de Sucesso
fazerLogin("usuario123", "abcdef"); // Cenário de Falha