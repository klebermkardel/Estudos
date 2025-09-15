// Conta Bancária: Crie um objeto contaBancaria com a propriedade saldo (inicie com 1000). Adicione dois métodos (funções) ao objeto:
// depositar(valor): Aumenta o saldo.
//sacar(valor): Diminui o saldo.

// Chame os dois métodos para simular um depósito e um saque, e imprima o saldo final.

// Cria um formatador de moeda para o Real (BRL) para exibir os valores.
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

// --- 1. CRIAÇÃO DO OBJETO ---
// O objeto 'contaBancaria' encapsula tanto os dados quanto as operações.
const contaBancaria = {
    // A propriedade 'saldo' representa o "estado" do objeto.
    saldo: 1000,
    
    // O método 'depositar' é uma função que pertence ao objeto.
    // Ele recebe 'valor' como parâmetro.
    depositar(valor) {
        // Validação interna: O método verifica se o valor recebido é válido.
        if (typeof valor === 'number' && valor > 0) {
            // A palavra-chave 'this' se refere ao próprio objeto 'contaBancaria'.
            // 'this.saldo += valor' aumenta o saldo do objeto.
            this.saldo += valor;
            console.log(`Depósito de ${formatadorMoeda.format(valor)} realizado com sucesso.`);
        } else {
            console.log("Erro: O valor do depósito deve ser um número positivo.");
        }
    },
    
    // O método 'sacar' também pertence ao objeto.
    sacar(valor) {
        // Validação interna em múltiplos níveis para proteger o saldo.
        if (typeof valor !== 'number' || valor <= 0) {
            console.log("Erro: O valor do saque deve ser um número positivo.");
        } else if (valor > this.saldo) {
            // O método verifica se a operação é possível (se há saldo suficiente).
            console.log("Erro: Saldo insuficiente para este saque.");
        } else {
            // Se todas as validações passarem, a operação é executada.
            this.saldo -= valor;
            console.log(`Saque de ${formatadorMoeda.format(valor)} realizado com sucesso.`);
        }
    }
};

// --- 2. SIMULAÇÃO DE OPERAÇÕES ---
console.log("\n--- Caixa Eletrônico ---");
// Exibe o estado inicial do objeto.
console.log(`Saldo inicial: ${formatadorMoeda.format(contaBancaria.saldo)}`);

console.log("\n--- Realizando Operações ---");
// Chamamos os métodos A PARTIR do objeto para interagir com ele.
contaBancaria.depositar(500);  // Deve funcionar
contaBancaria.sacar(200);     // Deve funcionar
contaBancaria.sacar(2000);    // Deve falhar (saldo insuficiente)
contaBancaria.depositar(-50); // Deve falhar (valor inválido)

// --- 3. EXIBIÇÃO DO RESULTADO FINAL ---
// Exibe o estado final do saldo após todas as operações.
console.log(`\nSaldo final: ${formatadorMoeda.format(contaBancaria.saldo)}`);
