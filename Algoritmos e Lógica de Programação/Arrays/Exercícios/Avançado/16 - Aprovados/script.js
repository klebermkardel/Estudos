// Filtrar Alunos Aprovados com filter: Crie um array de notas. Use .filter()
// para criar um novo array apenas com as notas que são maiores ou iguais a 7.

// --- 1. GERAÇÃO DO ARRAY DE DADOS ---
// Script para gerar um array com 5 notas decimais aleatórias de 0.0 a 10.0.
const notas = [];
const quantidadeDeNotas = 5;

for (let i = 0; i < quantidadeDeNotas; i++) {
    const nota = Number((Math.random() * 10).toFixed(1));
    notas.push(nota);
}

// Exibe o array original para que possamos comparar o resultado.
console.log(`Lista de todas as notas: [${notas.join(', ')}]\n`);


// --- 2. LÓGICA DE FILTRAGEM ---
// O método .filter() cria um NOVO array ('aprovados').
// Ele passa por cada 'nota' do array original.
// A arrow function 'nota => nota >= 7' é o teste:
// - Se a nota for >= 7, o teste retorna 'true' e a nota é MANTIDA no novo array.
// - Se a nota for < 7, o teste retorna 'false' e a nota é DESCARTADA.
const aprovados = notas.filter(nota => nota >= 7);


// --- 3. SAÍDA FINAL ---
// checando se o seu comprimento (length) é maior que 0.
if (aprovados.length > 0) {
    console.log(`Notas dos aprovados: [${aprovados.join(', ')}]`);
} else {
    // Este bloco agora será executado corretamente se nenhum aluno for aprovado.
    console.log("Não houve aprovados(as) nesta turma.");
}