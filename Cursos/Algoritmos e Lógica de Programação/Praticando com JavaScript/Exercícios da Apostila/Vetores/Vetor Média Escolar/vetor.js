// Definindo um vetor para armazenar as notas
let notas = [];

// Lendo as notas dos 10 alunos
for (let i = 0; i < 10; i++) {
    let nota = parseInt(prompt(`Digite a nota da pessoa ${i + 1}:`));
    notas.push(nota);
}

// Encontrando a maior nota digitada
let maiorNota = Math.max(...notas);

// Encontrando as posições da maior nota
let posicoesMaiorNota = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] === maiorNota) {
        posicoesMaiorNota.push(i + 1); // Adicionando 1 para obter a posição correta
    }
}

// Calculando a média da turma
let somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let mediaTurma = somaNotas / notas.length;

// Encontrando quantos alunos têm a maior nota
let quantidadeMaiorNota = notas.filter(nota => nota === maiorNota).length;

// Exibindo os resultados
console.log(`a) A média da turma é: ${mediaTurma.toFixed(1)}`);
console.log(`b) Alunos com a maior nota: ${quantidadeMaiorNota}`);
console.log(`c) A maior nota digitada é: ${maiorNota}`);
console.log(`d) Maior nota nas posições: ${posicoesMaiorNota.join(', ')}`);
