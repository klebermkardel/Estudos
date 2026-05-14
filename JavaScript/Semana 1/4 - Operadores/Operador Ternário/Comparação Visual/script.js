/* 

Comparação Visual

Veja como a mesma lógica seria escrita das duas formas:

*/

// Com if/else (Tradicional)

let mensagem;

if(horasEstudadas >= 2) {
    mensagem = "Pode descansar"
} else {
    mensagem = "Continue estudando"
}

console.log(mensagem)

// Com Operador Ternário

const mensagem = horasEstudadas >= 2 ? "Pode descansar" : "Continue estudando"