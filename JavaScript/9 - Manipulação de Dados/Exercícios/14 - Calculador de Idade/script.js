/* 

Calculador de Idade de Cadastro

Um dev se cadastrou no sistema e informou o ano de nascimento: const anoNascimento = 2000. Use o objeto Date para pegar o ano atual dinamicamente (sem digitar 2026 fixo no código) e calcule a idade dele.

*/

// Define o ano de nascimento fixo do usuário
const anoNascimento = 2000;

// Instancia o objeto de tempo para capturar as informações do presente
const dataAtual = new Date();

// Extrai dinamicamente o ano corrente com 4 dígitos direto do sistema
const anoAtual = dataAtual.getFullYear();

// Realiza o cálculo da idade subtraindo os anos
const idade = anoAtual - anoNascimento;

// Exibe a idade atualizada no console
console.log(`Idade: ${idade}`);