// Função para encontrar o maior e o menor número na lista de números fornecida pelo usuário
function findMinMax() {
    // Obtém o valor do input onde o usuário digitou a lista de números
    const numberListInput = document.getElementById('number-list').value;
    
    // Divide a string de entrada em uma lista de números, separados por vírgula, usando o método split
    // Em seguida, o método map é usado para converter cada elemento da lista em um número usando parseFloat
    const numbers = numberListInput.split(',').map(num => parseFloat(num));
    
    // Verifica se há algum elemento na lista que não é um número
    // Se houver, exibe um alerta e interrompe a execução da função
    if (numbers.some(isNaN)) {
        alert('Por favor, insira apenas números separados por vírgula.');
        return;
    }
    
    // Usa Math.max e Math.min com spread operator (...) para encontrar o maior e o menor número na lista, respectivamente
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    // Atualiza os elementos HTML com os valores do maior e do menor número
    document.getElementById('max').innerText = `Maior número: ${max}`;
    document.getElementById('min').innerText = `Menor número: ${min}`;
}
