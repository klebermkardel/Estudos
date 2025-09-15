// Fábrica de Carros: Crie uma função chamada criarCarro que receba marca, modelo e ano como parâmetros e retorne um novo objeto carro com essas propriedades. Chame a função para criar dois carros diferentes e imprima os objetos no console.

// --- 1. DECLARAÇÃO DA FUNÇÃO "FÁBRICA" ---

// A função 'criarCarro' age como um molde. Ela recebe os dados
// e retorna um objeto pronto com a estrutura que definimos.
const criarCarro = (marca, modelo, ano) => {
    // Esta é a sintaxe "Property Shorthand".
    // Como os nomes dos parâmetros (marca, modelo, ano) são os mesmos que
    // queremos para as chaves do objeto, podemos escrever apenas uma vez.
    // É o mesmo que escrever:
    // return {
    //   marca: marca,
    //   modelo: modelo,
    //   ano: ano
    // };
    return { marca, modelo, ano };
};

// --- 2. USO DA FÁBRICA ---

console.log("\n--- Criando Carros com a Factory Function ---\n");

// Chamamos a função para criar o primeiro carro e armazenamos o objeto retornado.
const carro1 = criarCarro("Toyota", "Corolla", 2025);

// Chamamos a função novamente com dados diferentes para criar o segundo carro.
const carro2 = criarCarro("Honda", "Civic", 2024);

// --- 3. EXIBIÇÃO DOS RESULTADOS ---

console.log("Carro 1:");
console.log(carro1);
// Saída: { marca: 'Toyota', modelo: 'Corolla', ano: 2025 }

console.log("\nCarro 2:");
console.log(carro2);
// Saída: { marca: 'Honda', modelo: 'Civic', ano: 2024 }

// Dica: Para ver múltiplos objetos de forma organizada, console.table é excelente!
console.log("\n--- Tabela Comparativa de Carros ---");
console.table([carro1, carro2]);