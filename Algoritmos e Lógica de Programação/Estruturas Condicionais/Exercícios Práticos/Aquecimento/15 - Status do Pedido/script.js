// Crie uma variável status com os valores "processando", "enviado" ou "entregue". Imprima uma mensagem diferente para cada status usando switch.

const prompt = require('prompt-sync')();

console.log("\n--- Verificador de Status do Pedido Interativo ---");
console.log("Status possíveis: processando, enviado, entregue");
const statusDigitado = prompt("Digite o status do pedido: ");

let mensagem;

const statusNormalizado = statusDigitado.trim().toLowerCase();

switch (statusNormalizado) {
    case "processando":
        mensagem = "⏳ Seu pedido está sendo preparado.";
        break;
    case "enviado":
        mensagem = "🚚 Seu pedido foi enviado e está a caminho!";
        break;
    case "entregue":
        mensagem = "✅ Seu pedido foi entregue com sucesso!";
        break;
    default:
        mensagem = `Status "${statusDigitado}" é inválido.`;
        break;
}

console.log(mensagem);