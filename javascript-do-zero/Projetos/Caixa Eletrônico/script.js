   // Simulação de dados da conta (nome e saldo)
    const nomeCliente = "João Santos";
    let saldo = 780; // saldo inicial fictício

    // Mensagem de boas-vindas
    alert(`Olá, ${nomeCliente}! Bem-vindo ao Caixa Eletrônico Virtual.\nSeu saldo atual é de R$${saldo}.`);

    // Solicita o valor para saque
    const valorSaque = Number(prompt("Digite o valor que deseja sacar (mínimo R$10, múltiplo de 10):"));

    // Verificação: se o valor digitado é inválido
    if (isNaN(valorSaque)) {
      alert("❌ Valor inválido. Digite um número válido.");
    } else if (valorSaque < 10) {
      alert("❌ O valor mínimo para saque é R$10.");
    } else if (valorSaque % 10 !== 0) {
      alert("❌ O valor deve ser múltiplo de 10 (ex: 10, 20, 50...).");
    } else if (valorSaque > saldo) {
      // Verifica se há saldo suficiente
      alert(`❌ Saldo insuficiente. Seu saldo é de R$${saldo}.`);
    } else {
      // Realiza o saque e calcula as notas
      let restante = valorSaque;

      // Calcula quantas notas de R$100 são necessárias
      const notas100 = Math.floor(restante / 100);
      restante %= 100;

      // Calcula notas de R$50
      const notas50 = Math.floor(restante / 50);
      restante %= 50;

      // Calcula notas de R$20
      const notas20 = Math.floor(restante / 20);
      restante %= 20;

      // Calcula notas de R$10
      const notas10 = Math.floor(restante / 10);

      // Atualiza o saldo da conta
      saldo -= valorSaque;

      // Monta a mensagem com o resultado do saque
      let mensagem = `✅ Saque de R$${valorSaque} realizado com sucesso!\n\nNotas entregues:\n`;

      // Exibe apenas as notas que foram usadas
      if (notas100 > 0) mensagem += `🟩 ${notas100} nota(s) de R$100\n`;
      if (notas50 > 0) mensagem += `🟨 ${notas50} nota(s) de R$50\n`;
      if (notas20 > 0) mensagem += `🟦 ${notas20} nota(s) de R$20\n`;
      if (notas10 > 0) mensagem += `🟥 ${notas10} nota(s) de R$10\n`;

      // Exibe saldo atualizado
      mensagem += `\n💼 Saldo restante: R$${saldo}`;

      // Mostra tudo com alert
      alert(mensagem);
    }

    // Mensagem final
    alert("Obrigado por utilizar nosso caixa eletrônico, João!");