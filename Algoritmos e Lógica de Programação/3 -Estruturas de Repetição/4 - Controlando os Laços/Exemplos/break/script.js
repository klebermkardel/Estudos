for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`Primeiro número divisível por 7 encontrado: ${i}`);
        break; // Sai do 'for' imprimindo apenas o primeiro número divisível por 7 encontrado
    }
}