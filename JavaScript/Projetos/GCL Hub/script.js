// ============================================================================
// BANCO DE DADOS BRUTO: ORDENS DE TRANSPORTE DA FROTA
// ============================================================================
const frotaLogistica = [
    {
        codigoNave: "   glc-titan-01   ",
        modelo: "Heavy Hauler",
        capacidadeToneladas: 1200,
        cargaAtualToneladas: 845.50,
        valorCargaMoedaOriginal: 250000.00,
        moedaContrato: "USD"
    },
    {
        codigoNave: "gcl-vortex-02",
        modelo: "Quantum Cargo",
        capacidadeToneladas: 500,
        cargaAtualToneladas: 492.10,
        valorCargaMoedaOriginal: 180000.00,
        moedaContrato: "EUR"
    },
    {
        codigoNave: "   gcl-comet-03   ",
        modelo: "Light Freighter",
        capacidadeToneladas: 250,
        cargaAtualToneladas: 75.30,
        valorCargaMoedaOriginal: 45000.00,
        moedaContrato: "USD"
    }    
]

// ============================================================================
// PASSO 1: CONSUMO DE API REAL (ASYNC / AWAIT / FETCH)
// ============================================================================

const buscarCotacoesMercado = async () => {
    try {
        console.log("[SISTEMA] Conectando à API do mercado financeiro...")

        // Faz o fetch combinando os endpoints do Dólar e Euro na AwesomeAPI
        const urlAPI = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"
        const respostaBruta = await fetch(urlAPI)

        // Converte o corpo do fluxo de dados para um objeto literal JavaScript
        const dadosMoedas = await respostaBruta.json()

        // Extrtai as propriedades de venda ('bid') e converte de String para Number
        const taxaDolar = parseFloat(dadosMoedas.USDBRL.bid)
        const taxaEuro = parseFloat(dadosMoedas.EURBRL.bid)

        return { dolar: taxaDolar, euro: taxaEuro }
    } catch(error) {
        console.error("[ERRO CRÍTICO] Falha ao coletar dados macroecônomicos da API:", error)
    }
}

// ============================================================================
// PASSO 2, 3 E 4: OBJETO CENTRILIZADOR DE LOGÍSTICA
// ============================================================================
const hubLogistica = {
    frota: frotaLogistica, // Injeta o banco de dados bruto dentro do objeto controlador

    processarPainel: function(cotacaoDolar, cotacaoEuro) {
        return this.frota.map(nave => {
            // PASSO 3: Higienização de Strings
            const codigoTratado = nave.codigoNave.trim().toLocaleUpperCase()

            // PASSO 3: Cálculo do espaço restante arredondando para baixo
            const espacoLivre = Math.floor(nave.capacidadeToneladas - nave.cargaAtualToneladas)

            // PASSO 2: Conversão monetárica dinâmica baseadas nas condições do contrato
            let valorConvertidoBRL = 0
            if (nave.moedaContrato === "USD") {
                valorConvertidoBRL = nave.valorCargaMoedaOriginal * cotacaoDolar
            } else if (nave.moedaContrato === "EUR") {
                valorConvertidoBRL = nave.valorCargaMoedaOriginal * cotacaoEuro
            }

            // Retorna o novo objeto unificado contendo o Spread do antigo mais os novos tratamentos
            return {
                ...nave,
                codigoNave: codigoTratado,
                espacoDisponivel: espacoLivre,
                valorEmBRL: valorConvertidoBRL
            }
        })
    },

    encontrarCargaMaisValiosa: function(frotaProcessada) {
        return frotaProcessada.reduce((campeao, desafiante) => {
            return desafiante.valorEmBRL > campeao.valorEmBRL ? desafiante : campeao
        })
    }
}

// ============================================================================
// PASSO 5: ORQUESTRADOR CENTRAL (FUNÇÃO MAIN)
// ============================================================================
/**
 * Função assíncrona principal que inicializa e gerencia os fluxos do Hub.
 */
const inicializarHubGCL = async () => {
    console.log("=== INICIANDO SISTEMA GALATIC COMMERCE HUB ===")

    try {
        // 1. Aguarda a resposta da API externa de mercado para obter as cotações
        const cotacoes = await buscarCotacoesMercado()
        console.log(`[SISTEMA] Cotações obtidas -> Dólar ${cotacoes.dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | ${cotacoes.euro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}\n`)

        // 2. Executa o processamento pesado de dados do Hub passando as cotações reais por parâmetros
        const frotaTratada = hubLogistica.processarPainel(cotacoes.dolar, cotacoes.euro)

        // 3. Renderiza o painel logístico formatado na tela
        console.log("--- PAINEL ATUALIZADO DE LOGÍSTICA ---")
        frotaTratada.forEach(nave => {
            console.log(`Nave: ${nave.codigoNave} ${nave.modelo}`)
            console.log(`- Espaço Disponível: ${nave.espacoDisponivel} toneladas restantes.`)
            console.log(`- Valor Total da Carga: ${nave.valorEmBRL.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`)
            console.log("")
        })
        console.log("--------------------------------------\n")

        // 4. Executa a inteligência de dados com Reduce para isolar o ativo de maior valor comercial
        const naveDestaque = hubLogistica.encontrarCargaMaisValiosa(frotaTratada)

        // 5. Exibe o relatório de monitoramento de riscos e segurança
        console.log("ALERTA DE SEGURANÇA: CARGA DE MAIOR VALOR MONITORADA")
        console.log(`A nave ${naveDestaque.codigoNave} transportando carga para este Hub possui o maior valor de mercado: ${naveDestaque.valorEmBRL.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    } catch(error) {
        console.error("[SISTEMA] Ocorreu uma pane geral no processamento do Hub:", error.message)
    } finally {
        console.log("\n=== FIM DO PROCESSAMENTO GCL HUB ===");
    }
}

// Executa função principal
inicializarHubGCL()