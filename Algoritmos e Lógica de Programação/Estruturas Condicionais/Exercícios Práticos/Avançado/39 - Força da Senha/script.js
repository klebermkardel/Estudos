// Classifique uma senha como "Forte", "Média" ou "Fraca".

const prompt = require('prompt-sync')();
console.log("\n--- Verificador de Força da Senha ---");

const senha = prompt("Digite uma senha: ");

let forca = 0;
let classificacao;
let feedback = "";

if(!senha) {
    classificacao =  "Inválida (vazia)";
} else {
    // Critério 1: Comprimento
    if (senha.length >= 8) {
        forca += 1;
    } else {
        feedback = "ter no mínimo 8 caracteres";
    }
    // Critério 2: Letra maiúscula
    if (/[A-Z]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter uma letra maiúscula"
    }
    // Critério 3: Letra minúscula
    if (/[a-z]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback != "") {
            feedback += ", ";
        }
        feedback += "conter uma letra minúscula";
    }
    // Critério 4: Número
    if (/[0-9]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter um número";
    }
    // Critério 5: Caracter Especial 
    if (/[^a-zA-Z0-9]/.test(senha)) {
        forca += 1;
    } else {
        if (feedback !== "") {
            feedback += ", ";
        }
        feedback += "conter um caractere especial (ex: !@#$%)";
    }    

    // Classificação Final
    if (forca === 5) {
        classificacao = "Forte 💪";
    } else if (forca >= 3) {
        classificacao = "Média 👍";
    } else {
        classificacao = "Fraca 👎";
    }
}

console.log(`\nA força da sua senha é: ${classificacao}`);
// Se a string de feedback não estiver vazia, mostramos as dicas
if (feedback !== "") {
    console.log(`Para melhorar: a senha precisa ${feedback}.`);
}