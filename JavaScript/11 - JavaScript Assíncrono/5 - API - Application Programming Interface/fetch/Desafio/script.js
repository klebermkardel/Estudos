/*

Para testar a internet aí no seu VS Code, vamos usar outra API fantástica e gratuita: a AwesomeAPI, que dá a cotação de moedas em tempo real.

A URL para buscar a cotação do Dólar para o Real hoje é:
https://economia.awesomeapi.com.br/last/USD-BRL

O JSON (objeto) que essa API devolve tem essa estrutura interna:

JavaScript
{
    USDBRL: {
        code: "USD",
        name: "Dólar Americano/Real Brasileiro",
        bid: "5.25" // <--- O valor da cotação atual fica guardado aqui dentro!
    }
}

Sua missão:

1. Crie uma função assíncrona chamada obterCotacaoDolar.

2. Abra a estrutura try / catch.

3. No try, faça o fetch() nessa URL da cotação do dólar e aguarde a resposta.

4. Converta a resposta para JSON (com o segundo await).

5. Dê um console.log() mostrando o valor atual do dólar acessando a propriedade .bid que está lá dentro (Dica de navegação de objetos: dados.USDBRL.bid).

*/

// O Dólar Real: Consumo da AwesomeAPI com Fetch Global
const obterCotacaoDolar = async () => {
    try {
        // 1. Faz a requisição HTTP assíncrona para o endpoint da API de moedas
        const resposta = await fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`);

        // 2. Transforma o corpo da resposta bruta trafegada na rede em um objeto JS legível
        const dadosDolar = await resposta.json();

        // 3. Como o valor vem em formato de String do servidor ("5.25"),
        // usamos o parseFloat() para convertê-lo em tipo Number
        const valorNumerico = parseFloat(dadosDolar.USDBRL.bid);

        // 4. Imprime o resultado final aplicando a máscara de moeda brasileira (R$)
        console.log(`Valor do dólar agora: ${valorNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        
    } catch (error) {
        // Captura e exibe falhas de conexão ou erros de sintaxe internos
        console.error("Falha ao conectar com o servidor:", error);
    }
};

// Dispara a consulta à API
obterCotacaoDolar();