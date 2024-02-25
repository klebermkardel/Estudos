// Seleciona o elemento HTML com a classe "result"
const result = document.querySelector(".result");

// Seleciona todos os botões dentro de elementos com a classe "buttons"
const buttons = document.querySelectorAll(".buttons button");

// Variável para armazenar o número atual
let currentNumber = "";

// Variáveis para armazenar o primeiro operando, o operador e o estado de reinício
let firstOperand = null;
let operator = null;
let restart = false;

// Função para atualizar o resultado exibido na calculadora
function updateResult(originClear = false) {
  result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

// Função para adicionar um dígito ao número atual
function addDigit(digit) {
  // Verifica se o dígito é uma vírgula e se já existe uma vírgula no número ou se o número está vazio
  if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

  // Verifica se é necessário reiniciar o número
  if (restart) {
    currentNumber = digit;
    restart = false;
  } else {
    currentNumber += digit;
  }

  // Atualiza o resultado exibido
  updateResult();
}

// Função para definir o operador
function setOperator(newOperator) {
  // Verifica se há um número atual
  if (currentNumber) {
    // Calcula o resultado antes de definir um novo operador
    calculate();

    // Converte o primeiro operando para um número e atualiza o número atual
    firstOperand = parseFloat(currentNumber.replace(",", "."));
    currentNumber = "";
  }

  // Define o novo operador
  operator = newOperator;
}

// Função para realizar o cálculo
function calculate() {
  // Verifica se há um operador e um primeiro operando definidos
  if (operator === null || firstOperand === null) return;

  // Converte o número atual para um segundo operando
  let secondOperand = parseFloat(currentNumber.replace(",", "."));
  let resultValue;

  // Realiza a operação com base no operador
  switch (operator) {
    case "+":
      resultValue = firstOperand + secondOperand;
      break;
    case "-":
      resultValue = firstOperand - secondOperand;
      break;
    case "×":
      resultValue = firstOperand * secondOperand;
      break;
    case "÷":
      resultValue = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  // Formata o resultado com até 5 casas decimais
  if (resultValue.toString().split(".")[1]?.length > 5) {
    currentNumber = parseFloat(resultValue.toFixed(5)).toString();
  } else {
    currentNumber = resultValue.toString();
  }

  // Reseta as variáveis e atualiza o resultado exibido
  operator = null;
  firstOperand = null;
  restart = true;
  updateResult();
}

// Função para limpar a calculadora
function clearCalculator() {
  // Reseta as variáveis e atualiza o resultado exibido
  currentNumber = "";
  firstOperand = null;
  operator = null;
  updateResult(true);
}

// Função para definir a porcentagem
function setPercentage() {
  // Calcula a porcentagem do número atual
  let result = parseFloat(currentNumber) / 100;

  // Ajusta o resultado se o operador for de adição ou subtração
  if (["+", "-"].includes(operator)) {
    result = result * (firstOperand || 1);
  }

  // Formata o resultado com até 5 casas decimais
  if (result.toString().split(".")[1]?.length > 5) {
    result = result.toFixed(5).toString();
  }

  // Atualiza o número atual e o resultado exibido
  currentNumber = result.toString();
  updateResult();
}

// Adiciona um evento de clique para cada botão
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    // Verifica se o botão clicado é um dígito
    if (/^[0-9,]+$/.test(buttonText)) {
      addDigit(buttonText);
    } 
    // Verifica se o botão clicado é um operador
    else if (["+", "-", "×", "÷"].includes(buttonText)) {
      setOperator(buttonText);
    } 
    // Verifica se o botão clicado é o de igual
    else if (buttonText === "=") {
      calculate();
    } 
    // Verifica se o botão clicado é o de limpar
    else if (buttonText === "C") {
      clearCalculator();
    } 
    // Verifica se o botão clicado é o de alterar sinal
    else if (buttonText === "±") {
      currentNumber = (
        parseFloat(currentNumber || firstOperand) * -1
      ).toString();
      updateResult();
    } 
    // Verifica se o botão clicado é o de porcentagem
    else if (buttonText === "%") {
      setPercentage();
    }
  });
});
