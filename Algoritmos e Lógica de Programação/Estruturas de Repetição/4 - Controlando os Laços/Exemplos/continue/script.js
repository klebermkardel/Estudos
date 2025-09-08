for (let i = 1; i <= 10; i++) {
    // Se o número for par...
    if (i % 2 === 0) {
        continue; // ...pule o resto do código e vá para a próxima iteração (i++)
    }
    console.log(i);
}