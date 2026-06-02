/*

Checagem de Propriedade: Crie uma função chamada temRequisito(objetoVaga, tecnologia). Ela deve verificar se a propriedade requisitos (que é um array) dentro do objeto da vaga possui a tecnologia pesquisada. Retorne true ou false.

*/

// Define a função que valida a existência de uma tecnologia nos requisitos da vaga
const temRequisito = (objetoVaga, tecnologia) => {
    // Acessa a propriedade interna do objeto, que armazena um array de strings
    const listaDeRequisitos = objetoVaga.requisitos;

    // Retorna true ou false usando o método de array .includes()
    return listaDeRequisitos.includes(tecnologia);
};

// Cria o objeto de teste simulando a estrutura de uma vaga real
const vaga = {
    empresa: "Google",
    cargo: "Dev Jr",
    requisitos: ["HTML", "CSS", "JavaScript"]
};

// Executa os testes passando o objeto 'vaga' criado acima como argumento
console.log(temRequisito(vaga, "JavaScript")); // Retorno no terminal: true
console.log(temRequisito(vaga, "Python"));     // Retorno no terminal: false