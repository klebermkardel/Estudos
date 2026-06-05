# Galactic Commerce & Logistics Hub (GCL Hub).

Esse projeto vai simular o painel de controle financeiro e logístico de uma corporação espacial. Para deixá-lo dinâmico e real, nós vamos abandonar os dados inventados: o seu sistema vai fazer um fetch na API de moedas real para capturar a cotação do Dólar e do Euro, converter valores de frete internacional e gerenciar uma frota de naves comerciais usando tudo (absolutamente tudo) o que você aprendeu.

## O Escopo do Projeto: GCL Hub

O seu script terá que cumprir 4 missões integradas:

1. **Passo 1 (APIs & Assincronismo)**: Buscar as cotações atuais do Dólar (USD) e do Euro (EUR) direto da internet.

2. **Passo 2 (Objetos & Métodos)**: Criar um objeto gerenciador de logística que possui uma lista de naves de carga. Esse objeto terá um método para calcular o valor do frete de cada nave convertido para Reais (BRL), baseando-se nas cotações que você buscou da internet.

3. **Passo 3 (Strings & Math)**: Formatar e higienizar os códigos das naves, e calcular o espaço restante de carga de cada uma usando arredondamentos.

4. **Passo 4 (Reduce Avançado)**: Identificar de forma automática qual nave está carregando a carga mais valiosa do hub para destacá-la no painel.

##  A Estrutura Base do Código

Copie este modelo inicial para o seu arquivo ```script.js```. Ele contém a estrutura do banco de dados bruto e o esqueleto do que você precisa desenvolver:

```js
// ============================================================================
// BANCO DE DADOS BRUTO: ORDENS DE TRANSPORTE DA FROTA
// ============================================================================
const frotaLogistica = [
    {
        codigoNave: "   gcl-titan-01   ",
        modelo: "Heavy Hauler",
        capacidadeToneladas: 1200,
        cargaAtualToneladas: 845.50,
        valorCargaMoedaOriginal: 250000.00,
        moedaContrato: "USD" // Contrato fechado em Dólar
    },
    {
        codigoNave: "gcl-vortex-02",
        modelo: "Quantum Cargo",
        capacidadeToneladas: 500,
        cargaAtualToneladas: 492.10,
        valorCargaMoedaOriginal: 180000.00,
        moedaContrato: "EUR" // Contrato fechado em Euro
    },
    {
        codigoNave: "   gcl-comet-03   ",
        modelo: "Light Freighter",
        capacidadeToneladas: 250,
        cargaAtualToneladas: 75.30,
        valorCargaMoedaOriginal: 45000.00,
        moedaContrato: "USD" // Contrato fechado em Dólar
    }
];

// ============================================================================
// DESENVOLVIMENTO DO PROJETO (Sua missão começa aqui)
// ============================================================================

// [Sua missão 1]: Criar a função assíncrona para buscar as moedas (USD e EUR)
// URL recomendada: https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL

// [Sua missão 2 e 3]: Criar o objeto central de controle
const hubLogistica = {
    frota: frotaLogistica,
    
    // Método que vai processar as naves, higienizar strings, 
    // calcular o espaço restante (Math) e converter os valores (APIs/Fetch)
    processarPainel: function(cotacaoDolar, cotacaoEuro) {
        // Dica: Use .map() ou .forEach() aqui dentro usando o 'this.frota'
    },

    // [Sua missão 4]: Método que usa .reduce() para encontrar a carga mais valiosa em BRL
    encontrarCargaMaisValiosa: function(frotaProcessada) {
        // Deve comparar os valores já convertidos em Reais e retornar a nave campeã
    }
};

// [Sua missão 5]: Criar a função principal (main) que orquestra tudo em ordem
```

## O Guia de Execução de Lógica

Para o seu painel funcionar igual aos sistemas de grandes empresas, siga este passo a passo de raciocínio dentro das suas funções:

**No Passo 1 (Busca de Cotações)**:

- Faça o ```fetch``` na URL combinada da AwesomeAPI.

- Lembre-se de converter para ```.json()```.

- Extraia os valores de ```USDBR.bid``` e ```EURBRL.bid```, transformando-os em números com ```parseFloat()```.

**No Passo 2 e 3 (Processamento Interno do Método)**:

- Dentro de ```processarPainel```, percorra o array. Para cada nave:

1. **Higienize o código**: Remova os espaços em branco das pontas e jogue para maiúsculo (Ex: ```"   gcl-titan-01   "``` vira ```"GCL-TITAN-01"```).

2. ```Calcule o Espaço Restante```: Subtraia a ```cargaAtualToneladas``` da ```capacidadeToneladas``` e use ```Math.floor()``` para arredondar o espaço que sobrou para um número inteiro.

3. **Converta o Valor**: Se a ```moedaContrato``` for ```"USD"```, multiplique o ```valorCargaMoedaOriginal``` pela cotação do dólar que veio por parâmetro. Se for ```"EUR"```, multiplique pela cotação do euro.

4. **Retorne o novo objeto** contendo todas as propriedades originais mais as novas propriedades calculadas (valorEmBRL e espacoDisponivel).

**No Passo 4 (O Relatório de Destaque)**:

- O método ```encontrarCargaMaisValiosa``` deve rodar um ```.reduce()``` no array processado comparando o valorEmBRL de cada par de naves até isolar a dona do maior valor.

## O Resultado Esperado no Terminal

Quando você executar a sua função principal no final do arquivo, o sistema deve imprimir um relatório limpo e organizado exatamente assim:

```plaintext
=== INICIANDO SISTEMA GALACTIC COMMERCE HUB ===
[SISTEMA] Conectando à API do mercado financeiro...
[SISTEMA] Cotações obtidas -> Dólar: R$ 5,25 | Euro: R$ 5,70

--- PAINEL ATUALIZADO DE LOGÍSTICA ---
Nave: GCL-TITAN-01 (Heavy Hauler)
- Espaço Disponível: 354 toneladas restantes.
- Valor Total da Carga: R$ 1.312.500,00

Nave: GCL-VORTEX-02 (Quantum Cargo)
- Espaço Disponível: 7 toneladas restantes.
- Valor Total da Carga: R$ 1.026.000,00

Nave: GCL-COMET-03 (Light Freighter)
- Espaço Disponível: 174 toneladas restantes.
- Valor Total da Carga: R$ 236.250,00
--------------------------------------

🔥 ALERTA DE SEGURANÇA: CARGA DE MAIOR VALOR MONITORADA 🔥
A nave GCL-TITAN-01 transportando cargas para este Hub possui o maior valor de mercado: R$ 1.312.500,00.

=== FIM DO PROCESSAMENTO GCL HUB ===
```

(Nota: Os valores de Real nas mensagens vão flutuar de acordo com o mercado financeiro de verdade no momento em que rodar!).

Esse é um projeto de nível pleno em manipulação e arquitetura de dados básicos de JS. Faça com calma, estruture os métodos dentro do objeto e, se precisar de ajuda ou o código der algum comportamento estranho, mande a sua tentativa aqui para depurarmos juntos.