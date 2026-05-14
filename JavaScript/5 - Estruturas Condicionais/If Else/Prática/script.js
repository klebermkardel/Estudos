/*

Prática: O Fluxo do seu Dia

Vamos usar o exemplo das vagas de emprego para criar um sistema de decisão real:

*/

const vagasCandidatadas = 3
const metaDeVagas = 10

if(vagasCandidatadas >= metaDeVagas) {
    console.log("Meta batida! Pode descansar.")
} else if(vagasCandidatadas >= 5) {
    console.log("Bom progresso, mas faltam algumas.")
} else {
    console.log("Atenção: Produtividade baixa hoje. Vamos aplicar em mais uma?")
}

/*

Por que usar if/else em vez de ternário

- Complexidade: Se você precisa executar várias linhas de código (ex: mudar uma variável, imprimir algo e fazer um cálculo) dentro de uma condição, o if/else é obrigatório
- Múltiplos caminhos: O ternário só lida bem com "sim ou não". O else if permite lidar com várias faixas de valores (com o exemplo acima)

*/