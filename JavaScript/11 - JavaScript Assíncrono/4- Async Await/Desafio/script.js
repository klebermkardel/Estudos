/*

1. Copie esta função que simula o tempo de resposta de um servidor (ela demora 2 segundos para responder):

const servidorDeJogos = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Instalação concluída com sucesso! 🎮"), 2000);
    });
};

2. Crie uma função assíncrona (async) chamada baixarJogo.

3. Dentro dela, coloque um console.log("Iniciando download do jogo...").

4. Na linha de baixo, use o await para chamar a função servidorDeJogos(), guardando o resultado dela dentro de uma constante chamada statusDownload.

5. Por fim, dê um console.log(statusDownload).

6. Chame a função baixarJogo() no final do arquivo.

*/

// Função que simula uma API externa ou servidor remoto devolvendo uma Promise
const servidorDeJogos = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Download concluído com sucesso! 🎮"), 2000);
    });
};

// ASYNC: Habilita o uso da palavra-chave 'await' dentro deste escopo
const baixarJogo = async () => {
    console.log("Iniciando download do jogo...");
    
    // TRY: Bloco de tentativa para operações assíncronas que podem falhar
    try {
        // AWAIT: Pausa a execução DESTA função até que a Promise do servidor seja resolvida
        const statusDownload = await servidorDeJogos();
        
        // Esta linha só executa após o sucesso do await acima
        console.log(statusDownload);
        
    } catch (error) {
        // CATCH: Captura o erro caso a Promise seja rejeitada (ex: queda de conexão)
        console.error("Falha no download!", error);
    }
};

// Executa o fluxo assíncrono
baixarJogo();