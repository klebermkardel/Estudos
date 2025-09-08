// Triângulo Válido e Classificação: Peça os comprimentos dos três lados de um triângulo,
// verifique se eles podem formar um triângulo e, se sim, classifique-o.

// Importa a biblioteca para entrada de dados.
const prompt = require('prompt-sync')();

// Exibe um título para o programa.
console.log("--- Classificador de Triângulos ---");

// Pede ao usuário os comprimentos dos três lados.
// A função Number() permite que os lados tenham valores decimais (ex: 3.5).
const lado1 = Number(prompt("Informe o primeiro lado do triângulo: "));
const lado2 = Number(prompt("Informe o segundo lado do triângulo: "));
const lado3 = Number(prompt("Informe o terceiro lado do triângulo: "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta condição verifica se as entradas são válidas para lados de um triângulo.
// Usamos o operador 'OU' (||) para exibir o erro se QUALQUER uma das condições for verdadeira:
// 1. isNaN(...): Se qualquer entrada não for um número.
// 2. lado <= 0: Se qualquer lado for um número não positivo (zero ou negativo).
if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Erro: Por favor, digite três números positivos e válidos para os lados.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este bloco só é executado se a validação inicial passar.

    // 1ª Camada de Lógica: Verificar a validade do triângulo (Desigualdade Triangular).
    // A regra diz que a soma de quaisquer dois lados deve ser MAIOR que o terceiro lado.
    // Usamos o operador 'E' (&&) porque TODAS as três condições devem ser verdadeiras.
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        
        // Se o triângulo é válido, entramos na 2ª Camada de Lógica para classificá-lo.
        let tipoDoTriangulo;

        // A ordem das verificações aqui é importante (do mais específico para o mais geral).
        
        // Verifica se é Equilátero (todos os lados iguais).
        // A checagem 'lado1 === lado2 && lado2 === lado3' é suficiente.
        if (lado1 === lado2 && lado2 === lado3) {
            tipoDoTriangulo = "Equilátero";
        } 
        // Se não for Equilátero, verifica se é Isósceles (pelo menos dois lados iguais).
        else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            tipoDoTriangulo = "Isósceles";
        } 
        // Se não for Equilátero NEM Isósceles, por eliminação, só pode ser Escaleno (todos os lados diferentes).
        else {
            tipoDoTriangulo = "Escaleno";
        }

        // --- SAÍDA DE SUCESSO ---
        console.log(`\nOs lados informados PODEM formar um triângulo do tipo: ${tipoDoTriangulo}.`);

    } else {
        // --- SAÍDA DE FALHA ---
        // Se a primeira condição da Desigualdade Triangular falhar, o triângulo é inválido.
        console.log("\nOs lados informados NÃO PODEM formar um triângulo válido.");
    }
}