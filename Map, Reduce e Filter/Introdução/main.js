// Map, Reduce e Filter

// Servem para manipular Arrays

/* Map (Mapear item por item do Array)

    - Criar um novo array com a mesma quantidade de items do array original.
    - O novo array você pode alterar o que quiser em relação ao array original.
    - Você tem acesso a 3 dados:
        - Item por item do array
        - Posição atual do array
        - Array Completo    
*/

const numeros = [1, 2, 3, 4, 5];

document.getElementById('arrayOriginal').innerHTML = `Array original: ${numeros.join(', ')}`;

const dobro = numeros.map((numero) => numero * 2);

document.getElementById('map').innerHTML = `Array com Map: ${dobro.join(', ')}`;

/* Reduce (Reduzir o Array a um único valor)

    - Reduz um array inteiro a um ÚNICO VALOR
        - Você tem acesso a 4 dados:
            - Acumulador
            - Valor Atual
            - Posição AStual
            - Array Completo
*/

const numerosImpares = [1, 3, 5, 7, 9];

document.getElementById('numerosImpares').innerHTML = `Números Ímpares: ${numerosImpares.join(', ')}`

const soma = numerosImpares.reduce((acumulador, atual) => {
    const total = acumulador + atual;

    return total;
}, 0);

document.getElementById('reduce').innerHTML = `Soma dos valores: ${soma}`;