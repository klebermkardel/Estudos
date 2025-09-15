// Objeto para JSON: Crie um objeto dadosUsuario com seu nome, idade e cidade. Use JSON.stringify() para converter este objeto em uma string JSON. Imprima o resultado.

// 1. CRIAÇÃO DO OBJETO JAVASCRIPT
// Criamos um objeto padrão em JavaScript, com chaves e valores.
const dadosUsuario = {
    nome: "João",
    idade: 29,
    cidade: "São Paulo"
};

// --- 2. CONVERSÃO PARA JSON ---
// A função JSON.stringify() recebe um objeto JavaScript como argumento...
// ...e retorna uma representação desse objeto em formato de string (texto) JSON.
// Passamos 'null' e '2' como argumentos extras
const textoJSON = JSON.stringify(dadosUsuario, null, 2);

// --- 3. EXIBIÇÃO DO RESULTADO ---
// Imprime a string JSON no console.
// A saída será uma linha única de texto: '{"nome":"João","idade":29,"cidade":"São Paulo"}'
console.log("\n--- Objeto Original (JavaScript) ---");
console.log(dadosUsuario);

console.log("\n--- String JSON Formatada ---");
console.log(textoJSON);