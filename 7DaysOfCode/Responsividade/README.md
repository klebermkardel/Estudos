# Agenda Médica

## Descrição

A Agenda Médica é um aplicativo web desenvolvido a partir do desafio de Responsividade da plataforma #7DaysOfCode. Ela permite aos profissionais de saúde visualizarem e gerenciarem as consultas agendadas para o dia atual e o próximo dia. O aplicativo foi desenvolvido utilizando tecnologias web, incluindo HTML, CSS e JavaScript, proporcionando uma experiência interativa e amigável para os usuários.

## Funcionalidades

O aplicativo da Agenda Médica possui as seguintes funcionalidades:

1. **Visualização de Consultas:** O usuário pode visualizar todas as consultas agendadas para hoje e amanhã. Cada consulta é exibida com detalhes, como horário, paciente e tipo de consulta.

2. **Duração da Consulta:** O aplicativo calcula automaticamente a duração de cada consulta com base no horário de início e término, exibindo a duração em minutos ou em horas e minutos, conforme apropriado.

3. **Opções de Ação:** Para cada consulta, o usuário tem opções de ação com base no tipo de consulta:
   - **Consulta no Local:** O usuário pode clicar no botão "Ver Endereço" para visualizar o endereço onde a consulta ocorrerá.
   - **Consulta Remota:** Para consultas remotas, o usuário tem duas opções:
     - "Ligar por Vídeo": Clicando neste botão, o usuário pode iniciar uma chamada de vídeo com o paciente.
     - "Ligar por Áudio": Este botão permite ao usuário iniciar uma chamada de áudio com o paciente.

## Como usar

1. **Clone o repositório:** Faça o clone deste repositório em sua máquina local.

2. **Execute o aplicativo:** Abra o arquivo `index.html` em seu navegador. Você verá a página da Agenda Médica carregada.

3. **Visualize as Consultas:** Na seção "Hoje", todas as consultas agendadas para o dia atual serão exibidas, incluindo os detalhes relevantes.
   Na seção "Amanhã", as consultas agendadas para o próximo dia serão mostradas.

4. **Realize Ações:** Dependendo do tipo de consulta, você pode executar ações específicas:
   - Para consultas presenciais, clique no botão "Ver Endereço" para visualizar o endereço.
   - Para consultas remotas, clique no botão "Ligar por Vídeo" ou "Ligar por Áudio" para iniciar a chamada com o paciente.

## Tecnologias Utilizadas

- **HTML:** Linguagem de marcação para estruturar a página da web, definindo a disposição dos elementos.
- **CSS:** Linguagem de estilização para definir a aparência e layout dos elementos da página.
- **JavaScript:** Linguagem de programação para adicionar interatividade e funcionalidades ao aplicativo.
- **Font Awesome:** Biblioteca de ícones utilizada para exibir os ícones de vídeo e mensagem.
- **Google Fonts:** Conjunto de fontes utilizado para estilizar o texto, proporcionando uma melhor experiência visual.

## Estrutura do Código

O código do aplicativo está organizado em três arquivos principais:

1. **index.html:** Este arquivo contém a estrutura básica da página, incluindo os elementos do cabeçalho, conteúdo principal e seção de agendamento.
2. **styles.css:** O arquivo CSS contém os estilos globais e específicos para cada elemento da página, definindo a aparência visual do aplicativo.
3. **scripts.js:** O arquivo JavaScript contém a lógica do aplicativo, incluindo os dados das consultas, funções para criar a lista de consultas e calcular a duração das consultas, além de chamar a função para exibir as listas de consultas na página.

## Considerações Finais

A Agenda Médica é um exemplo de aplicativo web simples que demonstra como organizar e exibir informações de consultas médicas. Para um ambiente de produção real, é importante considerar a implementação de um backend para armazenar e gerenciar os dados das consultas, garantindo a segurança e escalabilidade do aplicativo. Além disso, outras funcionalidades podem ser adicionadas, como autenticação de usuários, notificações de consulta e integração com sistemas de gerenciamento de consultas médicas. O aplicativo pode ser expandido e personalizado de acordo com as necessidades específicas de uma clínica ou consultório médico.
