# O que é o CSS?

A sigla **CSS** significa ***Cascading Style Sheets***, que em português traduzimos como **Folhas de Estilo em Cascata**.

Para entender o papel dele no desenvolvimento de sites, a melhor forma é pensar na construção de uma casa.

* **O HTML é a estrutura**: Ele é o tijolo, a coluna, as paredes cruas e onde fica cada porta ou janela. Ele diz o que tem na página (aqui tem um título, aqui tem um texto, aqui tem um botão).

* **O CSS é o acabamento**: Ele é a tinta na parede, o tipo de piso, o tamanho das janelas, a disposição dos móveis e a iluminação. Ele diz como as coisas devem aparecer.

Sem o CSS, a internet seria apenas um monte de textos pretos, links azuis e fundos brancos, tudo alinhado do lado esquedo da tela, parecendo um documento antigo do Word. O CSS é o que transforma esse documento cru em um site moderno, bonito e agradável de navegar.

## Por que se chama "Em Cascata"?

Esse nome "Cascata" é a regra mais importante sobre como o CSS pensa. Significa que as regras de estilo vêm de cima para baixo e que as regras **mais recentes (ou mais específicas) substituitem as antigas**, exatamente como a água flui e cobre o que estava embaio.

Por exemplo, se você escrever isso no seu código:

```CSS
p {
    color: blue; /* Primeira ordem: parágrafos azuis */
}

p {
    color: red; /* Segunda ordem: parágrafos vermelhos */
}
```

O navegador vai ler de cima para baixo. Ele até pinta o parágrafo de azul por um milissegundo, mas logo em seguida lê a ordem de baixo e o parágrafo fica **vermelho**. A última regra "ganhou" por causa da cascata.