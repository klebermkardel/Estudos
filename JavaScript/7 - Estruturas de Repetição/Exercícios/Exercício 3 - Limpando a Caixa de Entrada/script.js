/*

Limpando a Caixa de Entrada (while + pop)

Contexto: Você recebeu vários alertas de vagas no e-mail e quer ir processando (removendo) do final para o começo até a lista ficar totalmente vazia.

O Desafio:

1. Crie o array let alertasVagas = ["Alerta 1", "Alerta 2", "Alerta 3"].

2. Use um laço while que deve rodar enquanto o tamanho do array (.length) for maior que zero.

3. Dentro do loop, use o método .pop() para remover o último alerta e guarde o item removido em uma constante.

4. Exiba no console: "Processando e deletando: [Nome do Alerta]".

Fora do loop, dê um console.log(alertasVagas) para provar que a lista terminou vazia [].

*/

// Inicializa uma lista mutável contendo strings que simulam notificações de vagas recebidas
let alertaVagas = ["Alerta 1", "Alerta 2", "Alerta 3"];

// Executa o laço de repetição contínua ENQUANTO o array possuir pelo menos um elemento (.length maior que 0)
while (alertaVagas.length > 0) {
    // Altera o array original: remove o último elemento da lista e armazena seu valor na constante
    const alertaRemovido = alertaVagas.pop();
    
    // Exibe no terminal qual elemento está sendo processado e removido naquele exato momento
    console.log("Processando e deletando: [" + alertaRemovido + "]");
}

// Imprime o estado final do array para confirmar que todos os elementos foram eliminados (deve retornar [])
console.log(alertaVagas);

