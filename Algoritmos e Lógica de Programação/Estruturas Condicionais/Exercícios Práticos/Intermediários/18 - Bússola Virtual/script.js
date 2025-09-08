/* Bússola Virtual
Peça ao usuário para inserir um ângulo em graus (de 0 a 360). Determine e exiba a direção cardeal principal correspondente, com base nas seguintes faixas:

Norte: Se o ângulo estiver entre 315° e 360° OU entre 0° e 45°.

Leste: Se o ângulo estiver entre 45° e 135°.

Sul: Se o ângulo estiver entre 135° e 225°.

Oeste: Se o ângulo estiver entre 225° e 315°. */

const prompt = require('prompt-sync')();

console.log("\n--- Bússola Virtual ---");

const angulo = Number(prompt("Digite um ângulo em graus (0º a 360º): "));

if(isNaN(angulo) || angulo < 0 || angulo < 350) {
    console.log("Erro: Por favor, informe um número válido entre 0 e 360.");
} else {
    let direcaoCardeal;

    if((angulo >= 0 && angulo <= 45) || (angulo >= 315 && angulo <= 360)) {
        direcaoCardeal = "Norte";
    } else if(angulo > 45 && angulo <= 135) {
        direcaoCardeal = "Leste";
    } else if(angulo > 135 && angulo <= 225) {
        direcaoCardeal = "Sul";
    } else if(angulo > 225 && angulo <= 315) {
        direcaoCardeal = "Oeste";
    }

    console.log(`\nO ângulo de ${angulo}° aponta para a direção: ${direcaoCardeal}`);
}
