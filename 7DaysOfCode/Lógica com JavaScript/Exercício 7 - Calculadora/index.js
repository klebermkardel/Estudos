// Função que realiza a operação de soma
function soma(a, b) {
    return a + b;
  }
  
  // Função que realiza a operação de subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função que realiza a operação de multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função que realiza a operação de divisão
  function divisao(a, b) {
    return a / b;
  }
  
  // Função para exibir o menu de opções
  function exibirMenu() {
    alert("Escolha uma opção:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");
  }
  
  // Loop principal do programa
  do {
    exibirMenu();
    var escolha = parseInt(prompt("Digite o número da opção desejada:"));
  
    if (isNaN(escolha)) {
      alert("Opção inválida. Tente novamente.");
      continue;
    }
  
    switch (escolha) {
      case 1:
        var valor1 = Number(prompt("Digite o primeiro valor:"));
        var valor2 = Number(prompt("Digite o segundo valor:"));
        var resultado = soma(valor1, valor2);
        alert("O resultado da operação é: " + resultado);
        break;
      case 2:
        var valor1 = Number(prompt("Digite o primeiro valor:"));
        var valor2 = Number(prompt("Digite o segundo valor:"));
        var resultado = subtracao(valor1, valor2);
        alert("O resultado da operação é: " + resultado);
        break;
      case 3:
        var valor1 = Number(prompt("Digite o primeiro valor:"));
        var valor2 = Number(prompt("Digite o segundo valor:"));
        var resultado = multiplicacao(valor1, valor2);
        alert("O resultado da operação é: " + resultado);
        break;
      case 4:
        var valor1 = Number(prompt("Digite o primeiro valor:"));
        var valor2 = Number(prompt("Digite o segundo valor:"));
        var resultado = divisao(valor1, valor2);
        alert("O resultado da operação é: " + resultado);
        break;
      case 5:
        alert("Até a próxima!");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        break;
    }
  } while (escolha !== 5);
  