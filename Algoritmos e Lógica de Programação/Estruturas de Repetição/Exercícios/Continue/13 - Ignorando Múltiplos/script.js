// Ignorando Múltiplos: Use um laço for para imprimir os números de 1 a 30. No entanto, se o número for um múltiplo de 3 (ex: 3, 6, 9), use continue para não imprimi-lo.

for (let i = 1; i <= 30; i++) {
    if(i % 3 === 0) {
        continue;
    }
    console.log(i);
}