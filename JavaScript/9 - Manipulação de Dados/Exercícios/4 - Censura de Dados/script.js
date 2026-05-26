/*

Censura de Dados Sensíveis

Em um sistema de vagas, precisamos esconder o CPF do usuário na tela. Crie uma string const cpf = "123.456.789-00". Use o .replace() ou .replaceAll() para transformar apenas os números centrais em "X", resultando em "123.XXX.XXX-00".

*/

// Arrow function que censura os blocos centrais de qualquer CPF usando fatiamento de string
const censurarCpf = (cpf) => {
    // Extrai os 4 primeiros caracteres (ex: "123.")
    const parteInicial = cpf.substring(0, 4);
    
    // Extrai os caracteres do índice 11 até o final (ex: "-00")
    const parteFinal = cpf.substring(11);
    
    // Monta a string mascarada injetando a censura padrão no centro
    return `${parteInicial}XXX.XXX${parteFinal}`;
};

// Testando a função com dois CPFs completamente diferentes
console.log(censurarCpf("123.456.789-00")); // "123.XXX.XXX-00"
console.log(censurarCpf("987.654.321-11")); // "987.XXX.XXX-11"