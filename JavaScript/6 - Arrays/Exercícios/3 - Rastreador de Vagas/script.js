/*

Contexto: Você quer saber se já se candidatou para uma empresa específica sem precisar ler a lista inteira.

O Desafio:

1. Crie um array empresasFoco com algumas empresas (ex: "Google", "Microsoft", "Amazon").

2. Use o .indexOf() para procurar pela empresa "Netflix".

3. Exiba no console o número que o .indexOf() retornou.

Bônus: Com base no que aprendemos sobre o indexOf retornar -1, use um Operador Ternário para exibir na tela: "Já me candidatei!" ou "Ainda não me candidatei".

*/

// Inicializa um array contendo strings que representam as empresas que são o foco atual de candidaturas
const empresasFoco = ["Google", "Amazon", "Microsoft"];

// Executa uma busca pelo termo "Netflix". Se encontrar, retorna o índice numérico; se não encontrar, retorna -1
const jaMeCandidatei = empresasFoco.indexOf("Netflix");

// Usa um operador ternário para verificar se o índice é diferente de -1. Se for verdadeiro (encontrou), recebe a primeira frase; se for falso (retornou -1), recebe a segunda
let mensagem = jaMeCandidatei !== -1 ? "Já me candidatei!" : "Ainda não me candidatei.";

// Imprime no console o resultado numérico da busca (neste caso, -1)
console.log(jaMeCandidatei);

// Imprime no console a mensagem de texto final baseada na verificação lógica anterior
console.log(mensagem);