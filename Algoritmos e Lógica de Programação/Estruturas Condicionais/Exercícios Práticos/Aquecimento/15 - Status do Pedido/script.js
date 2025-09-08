// Crie uma variável status com os valores "processando", "enviado" ou "entregue".
// Imprima uma mensagem diferente para cada status usando switch.

// Importa a biblioteca para a entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título e as opções válidas para o usuário, melhorando a experiência.
console.log("\n--- Verificador de Status do Pedido Interativo ---");
console.log("Status possíveis: processando, enviado, entregue");

// Pede ao usuário que digite o status.
const statusDigitado = prompt("Digite o status do pedido: ");

// Declara a variável que irá armazenar a mensagem final.
// Usamos 'let' pois seu valor será atribuído dentro do 'switch'.
let mensagem;

// --- NORMALIZAÇÃO DA ENTRADA ---
// Esta é a linha mais importante para a robustez do código. Normalizamos a entrada ANTES de compará-la.
// 1. .trim(): Remove espaços extras do início e do fim.
// 2. .toLowerCase(): Converte tudo para minúsculo.
// Isso garante que " Processando ", "processando" e "PROCESSANDO" sejam tratados da mesma forma.
const statusNormalizado = statusDigitado.trim().toLowerCase();

// --- BLOCO DE LÓGICA PRINCIPAL ---
// A estrutura 'switch' verifica o valor da variável 'statusNormalizado'.
switch (statusNormalizado) {
    // Cada 'case' corresponde a um dos valores de texto esperados.
    case "processando":
        mensagem = "⏳ Seu pedido está sendo preparado.";
        // 'break' é essencial para sair do switch após encontrar o caso correspondente.
        break;
    case "enviado":
        mensagem = "🚚 Seu pedido foi enviado e está a caminho!";
        break;
    case "entregue":
        mensagem = "✅ Seu pedido foi entregue com sucesso!";
        break;
    // O bloco 'default' é executado se a variável 'statusNormalizado' não corresponder
    // a NENHUM dos 'case's acima. É o nosso "pega-tudo" para erros de digitação ou status inválidos.
    default:
        // Usamos a variável original 'statusDigitado' na mensagem de erro para que o usuário veja
        // exatamente o que digitou de errado.
        mensagem = `Status "${statusDigitado}" é inválido.`;
        break;
}

// --- SAÍDA FINAL ---
// Imprime a mensagem que foi definida dentro do bloco 'switch'.
console.log(mensagem);