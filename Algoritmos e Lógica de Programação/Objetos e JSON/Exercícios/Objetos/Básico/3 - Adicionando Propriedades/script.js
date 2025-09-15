// Adicionando Propriedades: Comece com um objeto filme vazio. Adicione as seguintes propriedades a ele, uma de cada vez: titulo, diretor, anoLancamento e genero. Imprima o objeto completo no final.

// 1. CRIAÇÃO DO OBJETO VAZIO
// Inicializamos um objeto vazio usando chaves {}. Ele está pronto para ser preenchido.
const filme = {};

// --- 2. ADIÇÃO DINÂMICA DE PROPRIEDADES ---
// Em JavaScript, os objetos são dinâmicos. Isso significa que podemos adicionar
// novas propriedades a eles a qualquer momento, mesmo depois de criados.
// Usamos a notação de ponto (objeto.novaPropriedade) e o operador de atribuição (=)
// para criar e definir o valor de cada nova propriedade.

// Adiciona a propriedade 'titulo' com seu valor.
filme.titulo = "Homem-Aranha: Sem Volta para Casa";
// Adiciona a propriedade 'diretor'.
filme.diretor = "Jon Watts";
// Adiciona a propriedade 'anoLancamento'.
filme.anoLancamento = 2021;
// Adiciona a propriedade 'genero'.
filme.genero = "ação/comédia/aventura/ficção científica";

// --- 3. EXIBIÇÃO DO OBJETO COMPLETO ---
// console.log() em um objeto é uma ótima maneira de ver sua estrutura e todos os
// seus dados de uma só vez.
console.log(filme);