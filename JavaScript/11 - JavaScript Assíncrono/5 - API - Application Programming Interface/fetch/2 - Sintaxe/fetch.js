/* 

A Sintaxe do fetch()

Para o nosso primeiro teste real, vamos usar uma API pública e gratuita chamada ViaCEP. Se passarmos um CEP para ela na URL, ela nos devolve um endereço completo.

Dê uma olhada na estrutura

O Pulo do Gato: Por que usamos dois await?

Essa é a maior pegadinha para quem está aprendendo:

O primeiro await fetch() espera a conexão com o servidor acontecer e trazer os cabeçalhos da resposta.

O segundo await respostaBruta.json() lê o corpo dessa resposta da rede e o transforma (converte) em um objeto que o JavaScript entende.

*/

const buscarEndereco = async (cep) => {
    try {
        // 1. O fetch vai até a internet e busca os dados brutos da resposta (Response)
        const respostaBruta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        // 2. Precisamos traduzir esses dados brutos para um objeto JavaScript legível (.json())
        // Esse processo de tradução também demora um pouquinho, então precisa de um 'await'
        const dadosEndereco = await respostaBruta.json()

        // 3. Agora 'dadosEndereco' é um objeto comum! Podemos acessar suas propriedades.
        console.log(`--- ENDEREÇO ENCONTRADO ---`)
        console.log(`Logradouro: ${dadosEndereco.logradouro}`)
        console.log(`Bairro: ${dadosEndereco.bairro}`)
        console.log(`Cidade: ${dadosEndereco.localidade} - ${dadosEndereco.uf}`)
    } catch(error) {
        console.log("Erro ao conectat com o servidor de CEP:", error)
    }
}

// Executa a busca real na internet
buscarEndereco("03759040")