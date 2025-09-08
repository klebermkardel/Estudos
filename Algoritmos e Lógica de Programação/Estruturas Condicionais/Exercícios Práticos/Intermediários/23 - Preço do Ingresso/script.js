/*

Preço do Ingresso de Cinema (Requisitos Completos)
O Problema: Criar um programa que calcula o preço do ingresso do cinema para uma pessoa, com base na sua idade e se ela é ou não estudante.

Requisitos (Regras de Negócio):

Preço Inteiro (Base): O valor do ingresso para um adulto comum é R$ 40,00.

Regra de Meia-Entrada: O ingresso custa R$ 20,00 (metade do preço) se a pessoa atender a pelo menos uma das seguintes condições:

É uma Criança (idade entre 0 e 12 anos, inclusive).

É um Idoso (idade igual ou superior a 60 anos).

É um Estudante.

Regra de Preço Inteiro: Se a pessoa não se encaixar em NENHUMA das categorias de meia-entrada (ou seja, for um adulto não-estudante com idade entre 13 e 59 anos), ela paga o preço inteiro.

Entradas do Usuário:

Idade: O programa deve pedir a idade da pessoa (um número inteiro).

Estudante: O programa deve perguntar se a pessoa é estudante. O usuário deve responder com "sim" ou "não".

Validações Obrigatórias:

O programa deve validar se a idade é um número inteiro e não negativo.

O programa deve ser flexível com a resposta sobre ser estudante, aceitando variações como "Sim", "SIM", "s", "nao", "Nao", etc

*/

// 1 - Habilitar prompt no node
const prompt = require('prompt-sync')();

// 2 - Formatar moeda
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// 4 - Inicio do programa
console.log("\n--- Preço do Ingresso ---");

// 5 - Tratamento de entrada de dados e conversão
const precoInteiroDigitado = prompt("Informe o valor inteiro do ingresso: ");
const precoLimpo = precoInteiroDigitado.replace(/\./g, "").replace(',', '.');
const precoInteiro = Number(precoLimpo);

const idade = Number(prompt("Informe a sua idade: "));
const respostaEstudante = prompt("Você é estudante? (sim/não): ");


// 6 - Validação de dados
if(isNaN(precoInteiro) || isNaN(idade) || !Number.isInteger(idade) || precoInteiro < 0 || idade < 0) {
    console.log("Erro: Por favor informe um preço válido e um número inteiro e positivo para a idade");
} else {
    // 7 - Normalização e Lógica Principal
    const respostaNormalizada = respostaEstudante.trim().toLowerCase();
    const ehEstudante = (respostaNormalizada === 'sim' || respostaNormalizada === 's');
    let precoFinal;

    if((idade >= 0 && idade <= 12) || idade >= 60 || ehEstudante) {
        precoFinal = precoInteiro / 2;
        console.log("\nVocê tem direito a meia-entrada!");
    } else {
        precoFinal = precoInteiro;
        console.log("\nVocê pagará o valor inteiro.");
    }

    // 8 - Saída Final
    console.log(`Valor do Ingresso: ${formatadorMoeda.format(precoFinal)}`);
}