// Simulação de API: Crie um array de objetos de usuários. Converta este array inteiro para uma string JSON (simulando o envio de dados para um servidor). Depois, pegue essa mesma string e a converta de volta para um novo array de objetos (simulando o recebimento de dados de um servidor) e imprima o nome do segundo usuário do novo array.


// --- 1. PREPARAÇÃO DOS DADOS ORIGINAIS ---
// Criamos nosso array de objetos, como se ele existisse no nosso sistema.
const dadosOriginais = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Ana", idade: 25, cidade: "Londrina" },
    { nome: "Eduardo", idade: 38, cidade: "Caruaru" },
    { nome: "Maria", idade: 29, cidade: "Ananindeua" }
];

// --- 2. SIMULAÇÃO DE ENVIO (Objeto -> JSON) ---
// Usamos JSON.stringify() para transformar nosso array de objetos em uma
// única string de texto, pronta para ser enviada pela internet.
const dadosEnviadosJSON = JSON.stringify(dadosOriginais);

console.log("\n--- Dados enviados para o servidor (formato JSON) ---");
console.log(dadosEnviadosJSON);


// --- 3. SIMULAÇÃO DE RECEBIMENTO (JSON -> Objeto) ---
// Usamos JSON.parse() para pegar a string JSON e reconstruir
// o array de objetos em uma nova variável.
const dadosRecebidos = JSON.parse(dadosEnviadosJSON);


// --- 4. ACESSO E EXIBIÇÃO DO DADO FINAL ---
// CORREÇÃO: Acessamos o dado com a sintaxe correta.
// Primeiro o índice do array, depois a propriedade do objeto.
const nomeDoSegundoUsuario = dadosRecebidos[1].nome;

console.log("\n--- Verificação dos dados recebidos ---");
console.log(`O nome do segundo usuário na lista recebida é: ${nomeDoSegundoUsuario}`); // Saída: Ana