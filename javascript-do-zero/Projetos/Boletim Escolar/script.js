/*

Projeto: Simulador de Boletim Escolar

Descrição:

Crie um programa em JavaScript que:

- Peça o nome do aluno;

- Peça quantas matérias ele quer cadastrar;

- Para cada matéria, peça:

- O nome da matéria;

- Duas notas;

Calcule a média de cada matéria e diga se o aluno foi aprovado ou reprovado (média ≥ 7);

Ao final, exiba um resumo geral com nome do aluno, todas as matérias e o resultado em cada uma.

*/

// Função para calcular a média entre duas notas
function calcularMedia(n1, n2) {
    // Retorna a média aritmética com duas casas decimais
    return ((n1 + n2) / 2).toFixed(2);
}

// Função que determina a situação com base na média calculada
function verificarSituacao(media) {
    // Se a média for maior ou igual a 7, retorna "Aprovado!", senão "Reprovado!"
    return media >= 7 ? "Aprovado!" : "Reprovado!";
}

// Função para cadastrar uma nova matéria
function cadastrarMateria(numero) {
    // Pergunta o nome da matéria
    const nomeMateria = prompt(`Qual a ${numero}ª matéria que você deseja adicionar?`);

    // Pergunta a primeira nota da matéria
    const nota1 = parseFloat(prompt(`Digite a primeira nota de ${nomeMateria}:`));

    // Pergunta a segunda nota da matéria
    const nota2 = parseFloat(prompt(`Digite a segunda nota de ${nomeMateria}:`));

    // Retorna um objeto representando a matéria com nome e as duas notas
    return {
        nomeMateria: nomeMateria,
        notas: [nota1, nota2]
    };
}

// Função que gera o boletim final com base nas matérias cadastradas
function gerarResumo(aluno, materias) {
    // Inicia o texto do boletim com o nome do aluno
    let resumo = `Boletim de ${aluno}:\n\n`;

    // Para cada matéria, calcula a média, determina a situação e adiciona ao resumo
    materias.forEach((materia) => {
        const media = calcularMedia(materia.notas[0], materia.notas[1]);
        const situacao = verificarSituacao(media);

        // Adiciona a linha da matéria no boletim
        resumo += `${materia.nomeMateria} - Notas: ${materia.notas.join(", ")} | Média: ${media} | Situação: ${situacao}\n`;
    });

    // Retorna o resumo completo como uma string
    return resumo;
}

// ===== Início do programa principal =====

// Solicita o nome do aluno
const aluno = prompt("Digite o seu nome: ");

// Solicita a quantidade de matérias que o aluno deseja cadastrar
const qtdMaterias = parseInt(prompt(`
    Bem-vindo ao seu Boletim Escolar, ${aluno}!
    ____________________________________________
    Quantas matérias você deseja cadastrar?    
`));

// Cria um array vazio para armazenar os dados das matérias
let materias = [];

// Laço que executa o cadastro de cada matéria com base na quantidade informada
for (let i = 1; i <= qtdMaterias; i++) {
    materias.push(cadastrarMateria(i));
}

// Gera o boletim final com base nas matérias cadastradas
const resultado = gerarResumo(aluno, materias);

// Exibe o boletim final usando um alerta
alert(resultado);



