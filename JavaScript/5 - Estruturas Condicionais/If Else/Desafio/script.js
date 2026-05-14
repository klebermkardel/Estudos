/* 

Desafio de Condicionais

Crie um sistema de "Status de Limpeza do Quintal" no seu console:

1. Crie uma variável partesLimpas (número).

2. Crie uma variável totalPartes (número).

3. Calcule a porcentagem.

4. Use if, else if e else para exibir:

    - 100%: "Quintal impecável!"

    - Acima de 50%: "Mais da metade já foi."

    - Abaixo de 50%: "Ainda tem muito trabalho pela frente."

    - 0%: "Nem começou ainda?"

Dica: No else if, você pode usar operadores lógicos se precisar de faixas específicas, como if (porcentagem > 0 && porcentagem < 50).

*/

const partesLimpas = 3
const totalPartes = 5

const progresso = (partesLimpas / totalPartes) * 100

if(progresso === 100) {
    console.log("Quintal impecável!")
} else if(progresso >= 50) {
    console.log("Mais da metade já foi!")
} else if(progresso < 50) {
    console.log("Ainda tem muito trabalho pela frente.")
} else {
    console.log("Nem começou")
}