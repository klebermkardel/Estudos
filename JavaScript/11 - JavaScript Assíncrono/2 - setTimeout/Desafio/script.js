/*

Desafio de Aquecimento Assíncrono
Para você sentir como o JavaScript gerencia essa fila de tarefas no seu próprio terminal, monte o seguinte cenário:

Crie uma função chamada carregarDashboard.

Dentro dela, dê um console.log("Iniciando carregamento do sistema...").

Use um setTimeout para simular a busca de dados de uma API que demora 3 segundos (3000ms). Dentro desse timeout, exiba a mensagem "Dados carregados: [Seu Nome] está online.".

Logo abaixo do setTimeout (mas ainda dentro da função principal), coloque um console.log("Verificando permissões de segurança...").

Execute a função carregarDashboard() e repare bem na ordem em que as frases aparecem no seu terminal.

*/

const seuNome = "Kleber";

const carregarDashboard = () => {
    console.log("Iniciando carregamento do sistema...");

    // SETTIMEOUT: Envia esta função para o segundo plano.
    // O JavaScript continuará executando as linhas síncronas sem travar o sistema.
    setTimeout(() => {
        console.log(`Dados carregados: ${seuNome} está online.`);
    }, 3000); // 3000 milissegundos = 3 segundos

    // Esta linha executa imediatamente após a abertura do temporizador acima
    console.log("Verificando permissões de segurança...");
};

// Executa o ecossistema de testes assíncronos
carregarDashboard();