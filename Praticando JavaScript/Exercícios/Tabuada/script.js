// Praticando JavaScript - Execício 9: Tabuada

// Crie um programa que exiba a tabela de multiplicação de 1 a 10. Por exemplo, a saída para o número 5 deve ser: "5 x 1 = 5", "5 x 2 = 10", ..., "5 x 10 = 50".

function tabelaDeMultiplicacao(numero) {
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  const numero = 3;
  tabelaDeMultiplicacao(numero);
