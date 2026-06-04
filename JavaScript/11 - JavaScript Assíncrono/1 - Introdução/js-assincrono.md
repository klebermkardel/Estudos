# JavaScript Assíncrono

Você fechou com chave de outro a a base fundamental. Agora que você já sabe como guardar, manipular e estruturar qualquer dado dentro do seu código, nós precisamos dar um passo crucial na sua jornada rumo ao front-end (Reacr/Next.js) ou back-end (Node.js).

Nós vamos entrar no universo do **JavaScript Assíncrono (Promessas, ``fetch``` API, ```async/await```)**.

Até agora, todo o seu código rodava em linha reta, de cima para baixo. O JavaScript executava uma linha, travava tudo, e só ia para a próxima quando aquela terminava. No mundo real, os sistemas não funcionam assim.

Se você pede dados para a API do Google, o seu site não pode "congelar" a tela do usuário enquanto a resposta viaja pela internet. O código precisa saber **esperar em segundo plano**.

Para começarmos, precisamos entender que o JavaScript é **Single Threaded** (executa uma coisa por vez) e, por padrão, **Síncrono** (executa tudo em fila, de cima para baixo).

Imagine um restaurante com um único garçom:

- **No modelo síncrono**: Ele vai até a Mesa 1, anota o pedido, vai para a cozinha, espera o prato ficar prontom leva o prato até a Mesa 1 e só DEPOIS vai atender a Mesa 2. O restaurante trava.

- **No modelo assíncrono**: Ele anota o pedido da Mesa 1, passa para a cozinha e, enquanto o prato está sendo feito, ele já vai atendendo as Mesas 2, 3 e 4. Quando a comida da Mesa 1 fica pronta, a cozinha avisa e ele entrega.

No JavaScript, tarefas que demoram (como buscar dados em um banco ou puxar informações de uma API na internet) rodam de forma assíncrona para não travar a aplicação do usuário.