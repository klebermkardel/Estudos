/* Dia 3 - Crie uma função que some dois números e retorne o resultado */


// Definindo uma arrow function chamada adder
const adder = () => {
    // Solicita ao usuário para digitar o primeiro número e armazena na variável n1
    const n1 = parseFloat(prompt("Digite o primeiro número:"));
    
    // Solicita ao usuário para digitar o segundo número e armazena na variável n2
    const n2 = parseFloat(prompt("Digite o segundo número:"));
    
    // Calcula a soma dos dois números digitados pelo usuário e armazena na variável soma
    const soma = n1 + n2;
    
    // Retorna o resultado da soma com uma mensagem
    return `A soma de ${n1} e ${n2} é igual a ${soma}`;
};

// Chama a função adder e exibe o resultado no console
console.log(adder());
