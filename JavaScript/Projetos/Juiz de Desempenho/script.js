/*

Projeto 4: O Juiz de Desempenho (if/else)
Foco: Estruturas condicionais complexas.

O Desafio: Criar um sistema que avalia seu dia com base em uma pontuação de 0 a 10.

Requisitos:

Crie uma variável pontuacaoDoDia.

Crie uma lógica de if/else if/else que siga esta tabela:

10: "Dia Perfeito! 🏆"

8 ou 9: "Dia muito produtivo. 🔥"

5, 6 ou 7: "Dia ok, mas pode melhorar. 📈"

Abaixo de 5: "Amanhã será melhor. Recupere o fôlego! 🔋"

Bônus: Se a pontuação for exatamente 0, exiba "O dia nem começou!".

*/

// Resolução:

// Declaração de variáveis
const pontuacaoDoDia = 0
let feedback

// Lógica condicional
if(pontuacaoDoDia >= 10) {
    feedback = "Dia perfeito!"
} else if(pontuacaoDoDia <= 9 && pontuacaoDoDia >= 8) {
    feedback = "Dia muito produtivo!"
} else if(pontuacaoDoDia >= 5 && pontuacaoDoDia <= 7) {
    feedback = "Dia ok, mas pode melhorar."
} else if (pontuacaoDoDia < 5 && pontuacaoDoDia > 0) {
    feedback = "Amanhã será melhor. Recupere o fôlego!"
} else {
    feedback = "O dia nem começou!"
}

// Exibe mensagem de feedback no console
console.log(feedback)