// Conta Bancária: Crie um objeto contaBancaria com a propriedade saldo (inicie com 1000). Adicione dois métodos (funções) ao objeto:
// depositar(valor): Aumenta o saldo.
//sacar(valor): Diminui o saldo.

// Chame os dois métodos para simular um depósito e um saque, e imprima o saldo final.

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const contaBancaria = {
    saldo: 1000,
    depositar(valor) {
        if(typeof valor === 'number' && valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de ${formatadorMoeda.format(valor)} realizado com sucesso.`)
        } else {
            console.log("Erro: O valor do depósito deve ser um número positivo.");
        }
    },
    sacar(valor) {
        if(typeof valor !== 'number' || valor <= 0) {
            console.log("Erro: O valor do saque deve ser um número positivo");
        } else if(valor > this.saldo) {
            console.log("Erro: Saldo insuficiente para este saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de ${formatadorMoeda.format(valor)} realizado com sucesso.`)
        }
    }
};

console.log("\n--- Caixa Eletrônico ---\n");
console.log(`Saldo inicial: ${formatadorMoeda.format(contaBancaria.saldo)}`);

contaBancaria.depositar(500); 
contaBancaria.sacar(200);   
contaBancaria.sacar(2000);    
contaBancaria.depositar(-50);

console.log(`\nSaldo final: ${formatadorMoeda.format(contaBancaria.saldo)}`);
