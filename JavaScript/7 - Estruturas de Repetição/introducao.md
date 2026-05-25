# O que é uma Estrutura de Repetição (e porque precisamos dela)?

No dia a dia, nossa vida é cheia de loops. Um loop nada mais é do que **repetir uma mesma ação até algo que mude.**

Pensando na sua rotina:

* Você come uma colherada de comida **enquanto** o prato não estiver vazio.

* Você bate a bola no chão **enquanto** estiver jogando basquete.

* Você dorme **até que** o despertador toque às 06h50.

Repare que todas essas ações têm duas coisas: **a ação que se repete** e a **a condição para parar**.

Na programação é igual. Se você precisasse mandar uma mensagem de "Bom dia!" para 5 contatos no WhatsApp, você não escreveria o código de enviar mensagem 5 vezes. Você escreveria o comando de uma vez só e diria: "Repita isso para cada pessoa da lista".

O JavaScript tem três ferramentas principais para fazer isso, e cada uma brilha em um cenário diferente: ```while```, ```do...while``` e ```for```.

## O Perigo Supremo: O Loop Infinito

Antes de escrever qualquer linha de código de repetição, você precisa conhecer o maior fantasma dos iniciantes.

Se voê criar uma condição que **nunca se torna falsa**, o computador vai tentar rodar aquilo para sempre. O processador vai a 100%, o navegador trava e o VS Code chora.

**Exemplo de loop infinito lógico**: "Coma uma colherada de comida enquanto o prato não estiver vazio", mas você nunca engole a comida e o prato nunca esvazia. Você fica travado nessa ação para sempre.