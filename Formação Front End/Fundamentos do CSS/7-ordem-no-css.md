# Ordem no CSS

- O CSS é carregado a partir de uma ordem;
- Se temos estilos misturados (inline, internal e external), qual será aplicado?
- Todos eles, mas com a seguinte ordem: inline > internal = external > padrão do navegador;
- Esta regra funciona quando temos estilos em um mesmo elemento;
- Interno e externo tem a mesma prioridade, a última regra ganha a 'corrida';