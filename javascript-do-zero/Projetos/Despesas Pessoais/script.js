// Função para cadastrar uma despesa
function cadastrarDespesa(numero) {
  const nome = prompt(`Digite o nome da ${numero}ª despesa (ex: Aluguel, Mercado, Uber):`);
  const categoria = prompt(`Categoria da despesa "${nome}" (ex: Moradia, Alimentação, Transporte):`);
  const valor = parseFloat(prompt(`Qual o valor da despesa "${nome}"? (somente número)`));

  return {
    nome: nome,
    categoria: categoria,
    valor: valor
  };
}

// Função que gera o relatório final
function gerarResumo(despesas) {
  let resumo = `=== RESUMO DAS DESPESAS ===\n\n`;

  // Lista completa das despesas
  resumo += `Despesas cadastradas:\n`;
  despesas.forEach((d, i) => {
    resumo += `${i + 1}. ${d.nome} - Categoria: ${d.categoria} - Valor: R$ ${d.valor.toFixed(2)}\n`;
  });

  // Total gasto usando reduce
  const total = despesas.reduce((soma, d) => soma + d.valor, 0);
  resumo += `\n💰 Total gasto: R$ ${total.toFixed(2)}\n`;

  // Categorias únicas (sem repetir), com letras maiúsculas
  const categoriasUnicas = [...new Set(despesas.map(d => d.categoria.toUpperCase()))];
  resumo += `\n📂 Categorias utilizadas: ${categoriasUnicas.join(", ")}\n`;

  // Maior despesa (find com reduce)
  const maiorDespesa = despesas.reduce((maior, atual) => atual.valor > maior.valor ? atual : maior);
  resumo += `\n🔝 Maior despesa: ${maiorDespesa.nome} (R$ ${maiorDespesa.valor.toFixed(2)})\n`;

  // Gastos por categoria (com filter + reduce agrupado manualmente)
  resumo += `\n📊 Total por categoria:\n`;
  categoriasUnicas.forEach(cat => {
    const gastosCat = despesas.filter(d => d.categoria.toUpperCase() === cat);
    const totalCat = gastosCat.reduce((soma, d) => soma + d.valor, 0);
    resumo += `- ${cat}: R$ ${totalCat.toFixed(2)}\n`;
  });

  return resumo;
}

// ===== PROGRAMA PRINCIPAL =====

// Pergunta quantas despesas o usuário quer registrar
const qtdDespesas = parseInt(prompt("Quantas despesas você deseja registrar?"));

// Cria array vazio para armazenar as despesas
let despesas = [];

// Cadastra todas as despesas com base na quantidade informada
for (let i = 1; i <= qtdDespesas; i++) {
  despesas.push(cadastrarDespesa(i));
}

// Gera e exibe o relatório
const relatorio = gerarResumo(despesas);
alert(relatorio);
