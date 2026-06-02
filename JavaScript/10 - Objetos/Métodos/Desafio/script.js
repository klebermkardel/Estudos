/*

Desafio Prático Avançado de Objetos
Para treinar esses dois conceitos juntos, crie um pequeno script com o seguinte cenário:

Crie um objeto chamado plataformaEstudos.

Adicione as propriedades: nome (string) e cursos (um array de objetos, onde cada objeto representa um curso com as chaves titulo e concluido (boolean)). Coloque pelo menos 3 cursos (ex: HTML, CSS, JavaScript).

Adicione um método dentro de plataformaEstudos chamado listarConcluidos. Esse método deve filtrar o array de cursos e exibir no console apenas os títulos dos cursos que possuem concluido: true.

*/

const plataformaEstudos = {
    nome: "Alura",
    cursos: [
        { titulo: "HTML", concluido: true },
        { titulo: "CSS", concluido: true },
        { titulo: "JavaScript", concluido: false }
    ],
    listarConcluidos: function() {
        // 1. Usamos o 'this' para acessar o próprio array de cursos
        // 2. Filtramos apenas os objetos onde concluido é true
        // 3. Usamos o .map() para extrair apenas a string do título de cada objeto filtrado
        return this.cursos
            .filter(curso => curso.concluido === true)
            .map(curso => curso.titulo); 
    }
};

// Agora o método retorna um array de strings: ["HTML", "CSS"]
// O .join() funciona perfeitamente!
console.log(`Cursos concluídos: ${plataformaEstudos.listarConcluidos().join(', ')}`);