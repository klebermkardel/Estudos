/*

Você foi contratado pela Star-Hop Logística para construir o sistema que gerencia as naves comerciais que cruzam a galáxia. Cada nave tem tripulação, tanques de combustível exóticos, rotas e uma IA de bordo.

Esse projeto vai testar tudo o que você aprendeu: tratamento de strings textuais (códigos de naves), manipulação de números e física espacial (Math), controle de fusos temporais espaciais (Date) e, claro, arrays de objetos complexos com métodos utilizando o this.

A Estrutura do Projeto

Crie uma nova pasta no seu VS Code chamada projeto-chronos e inicialize um arquivo index.js.

Aqui está o banco de dados inicial do sistema que você deve copiar para o topo do seu arquivo:

const frotaEstelar = [
    { 
        id: "  sn-77-aurora  ", 
        modelo: "Galaxy Explorer", 
        tripulacao: 8, 
        combustivelAtual: 145.85, 
        capacidadeTanque: 500,
        destino: "Alfa Centauri",
        dataPartida: new Date("2026-06-01T10:00:00Z")
    },
    { 
        id: "sn-101-titan", 
        modelo: "Dreadnought Cargo", 
        tripulacao: 15, 
        combustivelAtual: 490.12, 
        capacidadeTanque: 500,
        destino: "Nebulosa de Órion",
        dataPartida: new Date("2026-05-20T14:30:00Z")
    },
    { 
        id: "  sn-42-vanguard  ", 
        modelo: "Light Cruiser", 
        tripulacao: 4, 
        combustivelAtual: 32.40, 
        capacidadeTanque: 200,
        destino: "Estação Espacial Kepler",
        dataPartida: new Date("2026-06-15T08:00:00Z")
    }
];

Seus 4 Desafios de Engenharia Espacial

Para concluir o projeto, você precisará desenvolver a lógica para as seguintes etapas do software:

Passo 1: Higienização dos Identificadores (Strings)

Os IDs das naves vieram corrompidos do terminal de comando espacial. Note que algumas têm espaços em branco e letras minúsculas desalinhadas.

1. Crie uma função chamada limparIds(frota). Ela deve usar o .map() para retornar uma nova frota onde os IDs de cada nave estejam sem espaços nas pontas e com todas as letras em maiúsculo.

2. Resultado esperado do ID da primeira nave: "SN-77-AURORA"

Passo 2: O Scanner de Reabastecimento Crítico (Math)
As naves precisam de combustível para saltar no hiperespaço.

1. Crie uma função chamada analisarCombustivel(nave). Ela deve calcular a porcentagem de combustível atual em relação à capacidade do tanque.

2. Use o Math.floor() para arredondar essa porcentagem para baixo.

3. Se a nave tiver menos de 30% de combustível, a função deve exibir no console um alerta de perigo: "ALERTA: Nave [Modelo] com combustível crítico: [X]%!". Caso contrário, exiba: "Nave [Modelo] está estável com [X]%.".

Passo 3: Painel Dinâmico de Decolagem (Dates)

1. Crie um objeto centralizador no seu sistema chamado painelControle.

2. Dentro dele, adicione o array da frota (já com os IDs limpos do Passo 1).

3. Adicione um método chamado listarCronograma dentro desse objeto. Esse método deve usar o this para varrer as naves e verificar a dataPartida de cada uma contra a data atual do sistema (hoje).

4. Se a dataPartida for anterior ou igual a hoje, imprima: "[ID] - Missão Iniciada (Partida em: [Data Formatada pt-BR])".

5. Se a data for no futuro, imprima: "[ID] - Em Preparação (Lançamento agendado: [Data Formatada pt-BR])".

Passo 4: O Comandante da Frota (Reduce Avançado)

A diretoria da Star-Hop quer saber qual é a nave com a maior tripulação sob o comando deles para enviar um relatório ao Almirantado.

1. Crie uma função chamada obterNaveCapitanea(frota). Ela deve usar o .reduce() para comparar a propriedade tripulacao de cada nave e retornar o objeto da nave que possui a maior quantidade de tripulantes.

2. Imprima no console o modelo e o destino dessa nave soberana.

*/

// ============================================================================
// BANCO DE DADOS INICIAL: FROTA ESTELAR (DADOS BRUTOS)
// ============================================================================
const frotaEstelar = [
    { 
        id: "  sn-77-aurora  ", 
        modelo: "Galaxy Explorer", 
        tripulacao: 8, 
        combustivelAtual: 145.85, 
        capacidadeTanque: 500,
        destino: "Alfa Centauri",
        dataPartida: new Date("2026-06-01T10:00:00Z")
    },
    { 
        id: "sn-101-titan", 
        modelo: "Dreadnought Cargo", 
        tripulacao: 15, 
        combustivelAtual: 490.12, 
        capacidadeTanque: 500,
        destino: "Nebulosa de Órion",
        dataPartida: new Date("2026-05-20T14:30:00Z")
    },
    { 
        id: "  sn-42-vanguard  ", 
        modelo: "Light Cruiser", 
        tripulacao: 4, 
        combustivelAtual: 32.40, 
        capacidadeTanque: 200,
        destino: "Estação Espacial Kepler",
        dataPartida: new Date("2026-06-15T08:00:00Z")
    }
];

console.log("=== INICIANDO SISTEMA CHRONOS ===\n");

// ============================================================================
// PASSO 1: HIGIENIZAÇÃO DOS IDENTIFICADORES (STRINGS)
// ============================================================================
// Função genérica que limpa os espaços e padroniza os IDs em letras maiúsculas
const limparIds = (frota) => {
    return frota.map(nave => {
        nave.id = nave.id.trim().toUpperCase();
        return nave; // Retorna o objeto da nave com o ID modificado
    });
};

// Executa a higienização e guarda o novo array corrigido
const frotaHigienizada = limparIds(frotaEstelar);


// ============================================================================
// PASSO 2: O SCANNER DE REABASTECIMENTO CRÍTICO (MATH)
// ============================================================================
// Função que avalia a saúde energética de uma nave individualmente
function analisarCombustivel(nave) {
    // Math.floor garante o arredondamento da taxa percentual para baixo
    const porcentagemDeCombustivel = Math.floor((nave.combustivelAtual / nave.capacidadeTanque) * 100);

    // Condicional que dispara alertas de segurança para níveis abaixo de 30%
    if (porcentagemDeCombustivel < 30) {
        console.log(`[SCANNER] ALERTA: Nave ${nave.modelo} com combustível crítico: ${porcentagemDeCombustivel}%!`);
    } else {
        console.log(`[SCANNER] Nave ${nave.modelo} está estável com ${porcentagemDeCombustivel}%.`);
    }
}

// Executando o scanner na frota para testes de amostragem
analisarCombustivel(frotaHigienizada[0]);
analisarCombustivel(frotaHigienizada[1]);
console.log(""); // Quebra de linha estética


// ============================================================================
// PASSO 3: PAINEL DINÂMICO DE DECOLAGEM (OBJECTS & DATES)
// ============================================================================
// Objeto gerenciador que encapsula dados da frota e comportamentos do sistema
const painelControle = {
    frota: frotaHigienizada, // Recebe a frota tratada no Passo 1
    
    // Método que monitora o status temporal de lançamento de cada nave
    listarCronograma: function() {
        const hoje = new Date(); // Captura a data exata da execução do sistema (Ano 2026)
        
        console.log("--- CRONOGRAMA DE EXPEDIÇÕES INTERESTELARES ---");
        
        // O 'this' aponta para o próprio objeto painelControle para acessar a frota
        this.frota.forEach(nave => {
            const dataFormatada = nave.dataPartida.toLocaleDateString('pt-BR');
            
            // Comparação direta de objetos Date (convertidos em milissegundos nativamente)
            if (nave.dataPartida <= hoje) {
                console.log(`🚀 ${nave.id} - Missão Iniciada (Partida em: ${dataFormatada})`);
            } else {
                console.log(`⏳ ${nave.id} - Em Preparação (Lançamento agendado: ${dataFormatada})`);
            }
        });
        console.log(""); // Quebra de linha estética
    }
};

// Executa o método interno do painel de controle
painelControle.listarCronograma();


// ============================================================================
// PASSO 4: O COMANDANTE DA FROTA (REDUCE AVANÇADO)
// ============================================================================
// Função que aplica um algoritmo de torneio/comparação para isolar o maior valor
const obterNaveCapita = (frota) => {
    // O .reduce compara os objetos em pares (acumulador contra elemento atual)
    return frota.reduce((campeao, desafiante) => {
        // Se a tripulação do desafiante for maior, ele assume o posto de campeão
        return desafiante.tripulacao > campeao.tripulacao ? desafiante : campeao;
    }); // Omitimos o valor inicial para o reduce usar o primeiro objeto do array como ponto de partida
};

// Captura a nave vencedora
const naveLider = obterNaveCapitan(frotaHigienizada);

// Exibe o relatório de liderança militar da frota
console.log("--- RELATÓRIO DO ALMIRANTADO ESPACIAL ---");
console.log(`Nave Capitã da Frota: ${naveLider.modelo}`);
console.log(`Destino Operacional: ${naveLider.destino}`);
console.log(`Capacidade de Tripulação Total: ${naveLider.tripulacao} oficiais abordados.`);
console.log("\n=== FIM DO PROCESSAMENTO DE DADOS CHRONOS ===");