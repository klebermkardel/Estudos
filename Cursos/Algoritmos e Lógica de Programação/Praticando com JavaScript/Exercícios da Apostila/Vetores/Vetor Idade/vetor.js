// Definindo um vetor para armazenar as idades
let idades = [];

// Lendo as idades das 8 pessoas
for (i = 0; i < 8; i++) {
    let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
    idades.push(idade);
}

// Calculando a média das idades
let somaIdades = idades.reduce((acumulador, idade) => acumulador + idade, 0);
let mediaIdades = somaIdades / idades.length;

// Encontrando as posições com mais de 25 anos
let posicoesMais25 = [];
for (i = 0; i < idades.length; i++) {
    if (idades[i] > 25) {
        posicoesMais25.push(i);
    }
}

// Encontrando a maior idade digitada
let maiorIdade = Math.max(...idades);

// Encontrando as posições da maior idade
let posicoesMaiorIdade = [];
for (i = 0; i < idades.length; i++) {
    if (idades[i] === maiorIdade) {
        posicoesMaiorIdade.push(i);
    }
}

// Exibindo os resultados
console.log(`a) A média de idade das pessoas cadastradas é: ${mediaIdades.toFixed(2)}`);
console.log(`b) Pessoas com mais de 25 anos nas posições: ${posicoesMais25.join(', ')}`);
console.log(`c) A maior idade digitada é: ${maiorIdade}`);
console.log(`d) Pessoa com a maior idade na posição: ${posicoesMaiorIdade.join(', ')}`);