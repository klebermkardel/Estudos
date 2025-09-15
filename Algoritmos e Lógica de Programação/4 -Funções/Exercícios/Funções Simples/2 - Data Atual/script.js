// Exibir Data Atual: Crie uma função chamada mostrarDataAtual que, ao ser chamada, exiba a data e hora atuais.

// --- 1. CRIAÇÃO DE DADOS ---
// A função 'Date()' do JavaScript cria um objeto que contém a data e hora atuais.
// Armazenamos esse objeto em uma constante.
const dataAtual = new Date();

// --- 2. DECLARAÇÃO DA FUNÇÃO ---
// Criamos uma Arrow Function chamada 'mostrarDataAtual' que não recebe parâmetros ().
// A função tem a responsabilidade de executar a lógica de exibir a data.
const mostrarDataAtual = () => {
    // O corpo da função simplesmente usa o console.log para exibir o valor
    // da constante 'dataAtual' que foi declarada fora da função.
    console.log(dataAtual);
};

// --- 3. CHAMADA DA FUNÇÃO ---
// Para executar o código que está dentro do corpo da função, nós a chamamos pelo seu nome,
// seguido dos parênteses '()'.
mostrarDataAtual();