/*

Formatador de Data de Candidatura 

Um usuário se candidatou a uma vaga hoje. Pegue a data atual do sistema e formate-a para exibir na tela no padrão estrito de data do Brasil: "DD/MM/AAAA" (sem o horário), usando o método correto de localização.

*/

// Instancia o objeto com a data do momento da candidatura
const dataAtual = new Date();

// Usa a API internacional do JS para formatar a data diretamente no padrão brasileiro (DD/MM/AAAA)
const dataFormatada = dataAtual.toLocaleDateString('pt-BR');

// Exibe o resultado final formatado no console
console.log(`Data da candidatura: ${dataFormatada}`);