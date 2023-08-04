# O que é API, REST API e RESTFUL API?

API, REST API e RESTFUL API são utilizados no estado moderno da arquitetura cliente/servidor no desenvolvimento de software.

- Sumário:

* O que é API?
* Benefícios do uso de APIs
* O que é uma API RESTful e uma API REST?
* Pontos finais (Endpoints) de APIs REST e APIs RESTful.
* Diferença entre API REST e API RESTful.

## O que é API?

Interface de Programação de Aplicativos, abreviada como API, é um intermediário de software que permite que duas aplicações se comuniquem entre si. Vamos ver um exemplo para entender melhor esse tópico.

- 01 - Se o usuário deseja reservar bilhetes de trem, a aplicação web mostra o horário de partida, estações e todas as informações.

- 02 - Quando olhamos para isso do ponto de vista do desenvolvedor, o desenvolvedor quer exibir todas as informações do cronograma de trens na aplicação web, então ele utiliza as APIs para obter essas informações dos servidores web onde todos os detalhes e informações dos trens estão armazenados.

- 03 - Em seguida, os desenvolvedores podem recuperar os dados do servidor web usando as APIs para exibi-los nas aplicações web.

## Benefícios do Uso de API

**APIs** são necessárias para fazer a conexão entre as funções de aplicativos para manipular os dados de processos predefinidos.

* **Facilidade** de integração: APIs podem ser incorporadas em qualquer tipo de aplicativo de software, assim, elas podem ser facilmente integradas com as aplicações e funções entre diferentes sites.

* **Redução do esforço de desenvolvimento de software**: O uso de APIs reduz o esforço de desenvolvimento, permitindo que os desenvolvedores implementem APIs do Google Maps para fornecer a localização exata da loja aos visitantes do site.

* **Segurança**: APIs fornecem um gateway de comunicação seguro para que os diferentes componentes do aplicativo possam interagir e trocar dados.

## O que é uma API RESTFUL e uma API REST?

## REST API

**REpresentational State Transfer**, abreviado como **REST**. É uma API que segue um conjunto de regras para que aplicações e serviços possam se comunicar entre si.

As APIs REST funcionam ao atender solicitações de um recurso e retornar todas as informações relevantes sobre o recurso, traduzidas em um formato que os clientes possam facilmente interpretar (esse formato é determinado pela API que recebe as solicitações). Os clientes também podem modificar itens no servidor e até adicionar novos itens ao servidor por meio de uma API REST.

## RESTful API

As API RESTful obedece às restrições da arquitetura REST e interage com serviços web RESTful. A API RESTful também segue os princípios das APIs REST. As APIs RESTful são mais escaláveis e têm uma vida útil mais longa. A API RESTful utiliza requisições HTTP para acessar e utilizar os dados.

There four basic HTTP requests a client can make are:


Existem **quatro solicitações básicas** que um cliente pode fazer usando o HTTP:

* GET: Para recuperar um recurso.
* POST: Para criar um novo recurso.
* PUT: Para editar ou atualizar um recurso existente.
* DELETE: Para excluir um recurso.