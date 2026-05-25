# Switch

O ```switch``` é uma estrutura condicional para quando você tem uma única variável e precisa compará-la com vários valores específicos (casos).

Pense no ```if/else``` como um GPS que decide entre "esquerda ou direita". O ```switch``` é mais como um **menu de elevador**: você aperta o botão do andar (o valor) e ele te leva diretamente para o destino correspondente.

1. A Estrutura do ```switch```

Ele funciona com quatro palavras-chave: 

1. ```switch```: Define qual variável estamos testando.
2. ```case```: Cada um dos valores que queremos comparar.
3. ```break```: Crucial! Ele "sai" do switch. Sem ele, o código continua lendo todos os casos abaixo.
4. ```default```: O plano B, caso nenhum valor combine (como o seu ```else```).

2. Prática (Dentro da pasta Prática)

3. Porque usar ```switch``` em vez de ```if/else```?

 * Clareza: Quando você tem 5 ou 10 opções fixas (como meses, dias ou categorias de produtos), o ```switch``` é muito mais fácil de ler.
 * Performance: Em listas muito longas de valores fixos, o motor do JavaScript consegue processar o ```switch``` de forma um pouco mais otimizada.

 4. O Erro Comum: Esquecer o ```break```

 Se você não colocar o ```break```, acontece o efeito "**fall-through**" (queda-livre). O JavaScript executa o caso correto e todos os que vierem abaixo dele até encontrar um break.

 **Exemplo do erro**:

 ```js
 const cargo = "dev"

 switch (cargo) {
    case "dev":
        console.log("Escreve código")
    case "designer"
        console.log("Faz o layout."
        break
 }

//  Resultado: Ele imprime os dois!
 ```