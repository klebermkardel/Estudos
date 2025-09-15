// Informações da Pessoa: Crie um objeto chamado pessoa com as propriedades nome e idade. Imprima a idade da pessoa. Em seguida, atualize a idade da pessoa para um novo valor e imprima a nova idade.

// 1. CRIAÇÃO DO OBJETO
// O objeto 'pessoa' é criado com duas propriedades: nome e idade.
const pessoa = {
    nome: "João",
    idade: 29
};

// 2. ACESSO INICIAL
// Usamos a notação de ponto para acessar e imprimir o valor inicial da propriedade 'idade'.
console.log(`Idade atual: ${pessoa.idade}`);

// --- 3. MODIFICAÇÃO DA PROPRIEDADE ---
// Acessamos a propriedade 'idade' novamente, mas desta vez usamos o operador
// de atribuição (=) para substituir o valor antigo (29) pelo novo valor (30).
pessoa.idade = 30;

// NOTA IMPORTANTE SOBRE 'const':
// Mesmo que o objeto 'pessoa' tenha sido declarado com 'const', podemos alterar
// os valores de suas propriedades internas. O que não poderíamos fazer é tentar
// atribuir um objeto inteiramente novo à constante 'pessoa'.

// 4. ACESSO FINAL
// Imprimimos a propriedade 'idade' novamente para confirmar que o valor foi atualizado.
console.log(`Nova idade: ${pessoa.idade}`);