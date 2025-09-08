// Vogal ou Consoante: Peça uma única letra e verifique se é uma vogal ou consoante.

// Importa a biblioteca para a entrada de dados.
const prompt = require('prompt-sync')();

// Pede ao usuário que digite uma letra.
const entrada = prompt("Digite uma única letra: ");

// Imprime uma linha em branco para formatação.
console.log("");

// --- BLOCO DE VALIDAÇÃO (CAMADA 1) ---
// Verificamos se a entrada não está vazia ('!entrada')
// OU se o tamanho do texto é diferente de 1 ('entrada.length !== 1').
// Esta é a primeira checagem para erros básicos.
if (!entrada || entrada.length !== 1) {
    console.log("Erro: Por favor, digite apenas uma letra.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    // Este código só é executado se a entrada tiver exatamente 1 caractere.
    
    // Expressão Regular (Regex) para verificar se o caractere é uma letra.
    // '^': Início da string.
    // '[a-z]': Qualquer letra de 'a' a 'z'.
    // '$': Fim da string.
    // 'i': Flag que ignora a diferença entre maiúsculas e minúsculas.
    const padraoLetra = /^[a-z]$/i;

    // --- BLOCO DE VALIDAÇÃO (CAMADA 2) ---
    // Usamos o método '.test()' para checar se a entrada corresponde ao nosso padrão Regex.
    // Essa é a segunda checagem, para ver se o caractere é uma LETRA e não um número ou símbolo.
    if (padraoLetra.test(entrada)) {
        // Se a validação passou, agora sim podemos classificar.
        
        // Padronizamos a letra para minúscula para simplificar a comparação.
        const letraMinuscula = entrada.toLocaleLowerCase();

        // Checamos se a letra minúscula é igual a 'a', OU (||) 'e', OU 'i', etc.
        // Se UMA dessas condições for verdadeira, a letra é uma vogal.
        if (letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u') {
            console.log(`A letra "${entrada}" é uma VOGAL`);
        } else {
            // Se não for uma vogal (e já sabemos que é uma letra), então é uma consoante.
            console.log(`A letra "${entrada}" é uma CONSOANTE.`);
        }
    } else {
        // Se a validação do Regex falhou, o caractere não é uma letra.
        console.log(`Erro: O caractere "${entrada}" não é uma letra.`)
    }
}