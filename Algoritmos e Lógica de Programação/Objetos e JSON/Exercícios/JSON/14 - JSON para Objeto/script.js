// JSON para Objeto: Dada a seguinte string JSON: '{"nome":"Placa de Vídeo","preco":1500,"emEstoque":true}'. Use JSON.parse() para convertê-la de volta em um objeto JavaScript. Em seguida, access e imprima o preço do produto.


// --- 1. CONFIGURAÇÃO (Ferramentas Adicionais) ---
// Criamos um formatador de moeda para o Real (BRL) para exibir o preço de forma profissional.
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// --- 2. OS DADOS INICIAIS ---
// Esta é a nossa string (texto) de entrada, formatada segundo as regras do JSON.
// É assim que os dados geralmente chegam de um servidor ou API.
const textoJSON = '{"nome":"Placa de Vídeo", "preco":1500, "emEstoque":true}';

// --- 3. DEMONSTRAÇÃO (ANTES DA CONVERSÃO) ---
// Usamos o operador 'typeof' para verificar o tipo da nossa variável ANTES do parse.
console.log("Tipo de dado ANTES do parse:", typeof textoJSON);

// --- 4. CONVERSÃO PARA OBJETO (O "PARSE") ---
// A função JSON.parse() recebe a string JSON como argumento e a "analisa",
// transformando-a de um simples texto de volta para um objeto JavaScript estruturado.
const produto = JSON.parse(textoJSON);

// --- 5. DEMONSTRAÇÃO (DEPOIS DA CONVERSÃO) ---
// Verificamos o tipo novamente para PROVAR que a conversão funcionou.
console.log("Tipo de dado DEPOIS do parse:", typeof produto);

// --- 6. SAÍDA FINAL ---
// Agora que 'produto' é um objeto JavaScript real, podemos:
// 1. Acessar suas propriedades com a notação de ponto (ex: produto.nome, produto.preco).
// 2. Usar essas propriedades com outras ferramentas, como o nosso 'formatadorMoeda'.
console.log(`\nO preço do produto "${produto.nome}" é: ${formatadorMoeda.format(produto.preco)}`);