/*

Exercício 7: Buscando Vagas Específicas (.filter())

Contexto: Você recebeu uma lista de cargos, mas seu foco atual é vaga para desenvolvedor Júnior.

O Desafio:

1. Crie o array const vagasDisponiveis = ["Dev Pleno", "Dev Júnior", "Dev Sênior", "Estagiário", "Dev Júnior"].

2. Use o .filter() para criar o array vagasFiltradas apenas com os itens que sejam exatamente iguais a "Dev Júnior".

*/

// Inicializa o array com a listagem bruta de cargos coletados no mercado
const vagasDisponiveis = ["Dev Pleno", "Dev Júnior", "Dev Sênior", "Estagiário", "Dev Júnior"];

// FILTER: Varre a lista de vagas e gera um novo array retendo apenas as strings correspondentes a "Dev Júnior"
const vagasFiltradas = vagasDisponiveis.filter(vaga => vaga === "Dev Júnior");

// Exibe o array filtrado contendo apenas as oportunidades alvo
console.log(vagasFiltradas);