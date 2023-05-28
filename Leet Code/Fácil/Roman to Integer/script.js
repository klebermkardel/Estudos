var romanToInt = function(s) {
    // Dicionário que associa os caracteres romanos aos seus valores correspondentes
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0; // Variável para armazenar o resultado final
  
    // Percorre cada caractere do numeral romano
    for (let i = 0; i < s.length; i++) {
      const currentNumeral = romanNumerals[s[i]]; // Valor numérico do caractere atual
      const nextNumeral = romanNumerals[s[i + 1]]; // Valor numérico do próximo caractere (se existir)
  
      // Verifica se há um próximo caractere e se o valor do caractere atual é menor que o próximo
      if (nextNumeral && currentNumeral < nextNumeral) {
        // Caso o valor do caractere atual seja menor que o próximo, subtrai esse valor do próximo e adiciona ao resultado
        result += nextNumeral - currentNumeral;
        i++; // Incrementa o índice para pular o próximo caractere
      } else {
        // Caso contrário, adiciona o valor do caractere atual ao resultado
        result += currentNumeral;
      }
    }
  
    return result; // Retorna o resultado final
  };

  console.log(romanToInt('III')); // 3
  console.log(romanToInt('IX')); // 9
  console.log(romanToInt('LVIII')); // 58
  console.log(romanToInt('MCMXCIV')); // 1994