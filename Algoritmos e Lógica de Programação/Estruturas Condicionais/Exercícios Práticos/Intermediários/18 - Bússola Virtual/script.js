/* Bússola Virtual
Peça ao usuário para inserir um ângulo em graus (de 0 a 360). Determine e exiba a direção cardeal principal. */

const prompt = require('prompt-sync')();

console.log("\n--- Bússola Virtual ---");

const angulo = Number(prompt("Digite um ângulo em graus (0º a 360º): "));

// --- BLOCO DE VALIDAÇÃO ---
// Esta é a "guarda" do nosso programa. Se a entrada for:
// 1. Não numérica (isNaN) OU
// 2. Negativa (angulo < 0) OU
// 3. Maior que 360 (angulo > 360)
// ...o programa exibirá um erro.
if(isNaN(angulo) || angulo < 0 || angulo > 360) {
    // CORREÇÃO: A validação para o limite superior foi ajustada para > 360.
    console.log("Erro: Por favor, informe um número válido entre 0 e 360.");
} else {
    // --- BLOCO DE LÓGICA PRINCIPAL ---
    let direcaoCardeal;

    // Esta é a parte mais complexa da lógica, e você a resolveu perfeitamente.
    // O operador 'OU' (||) lida com o fato de que o 'Norte' está no início E no fim do círculo de 360 graus.
    if((angulo >= 0 && angulo <= 45) || (angulo > 315 && angulo <= 360)) {
        direcaoCardeal = "Norte";
    } 
    // Os blocos 'else if' cuidam das direções restantes.
    // O uso do operador '>' aqui é crucial para evitar que as fronteiras (45°, 135°, etc.)
    // caiam em duas categorias ao mesmo tempo.
    else if(angulo > 45 && angulo <= 135) {
        direcaoCardeal = "Leste";
    } else if(angulo > 135 && angulo <= 225) {
        direcaoCardeal = "Sul";
    } else if(angulo > 225 && angulo <= 315) {
        direcaoCardeal = "Oeste";
    }

    // --- SAÍDA FINAL ---
    console.log(`\nO ângulo de ${angulo}° aponta para a direção: ${direcaoCardeal}`);
}