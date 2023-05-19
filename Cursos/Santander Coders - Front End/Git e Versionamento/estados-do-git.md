# Estados do Git

O Git, um sistema de controle de versão distribuído amplamente utilizado, possui três estados principais que os arquivos podem assumir durante o fluxo de trabalho. Esses estados são essenciais para entender como o Git rastreia as alterações em seus projetos. 

Aqui estão os três estados do Git:

## 1. **Untracked (Não rastreado)**:
Os arquivos não rastreados são aqueles que o Git não está monitorando. Eles não fazem parte do repositório. Quando você adiciona um novo arquivo ao seu diretório de trabalho, ele é considerado não rastreado pelo Git. O Git não mantém um registro das alterações nesses arquivos.

## 2. **Tracked (Rastreado)**:
Os arquivos rastreados são aqueles que o Git está monitorando e registrando as alterações. Existem dois subestados para os arquivos rastreados:

   a. **Modified (Modificado)**:
   Um arquivo é considerado modificado quando foi alterado desde o último commit. O Git detecta automaticamente essas alterações e as considera como modificações a serem registradas.

   b. **Staged (Preparado)**:
   Quando você marca explicitamente as modificações em um arquivo modificado para serem incluídas no próximo commit, ele é considerado preparado (staged). O Git permite selecionar quais alterações específicas você deseja incluir em um commit, facilitando o controle preciso das versões.

## 3. **Committed (Confirmado)**:
Os arquivos confirmados são aqueles que foram armazenados permanentemente no repositório Git. Quando você faz um commit, todas as alterações preparadas (staged) são gravadas como uma nova versão do projeto. Os arquivos confirmados não são modificados nem preparados até a próxima modificação.

Aqui está uma representação gráfica dos estados do Git:

```
                   ┌────────────┐  git add   ┌─────────────┐  git commit   ┌─────────────┐
                   │ Untracked  │ ─────────> │  Staged     │ ────────────> │ Committed   │
                   └────────────┘            └─────────────┘               └─────────────┘
                           ▲                          ▲                          │
                           │                          │                          │
                        git add                   git reset                      │
                           │                          │                          │
                           ▼                          ▼                          │
                   ┌────────────┐            ┌─────────────┐                    │
                   │  Modified  │            │  Unmodified │                    │
                   └────────────┘            └─────────────┘                    │
                           ▲                          ▲                          │
                           │                          │                          │
                    git add                     git checkout                     │
                           │                          │                          │
                           ▼                          ▼                          │
                   ┌────────────┐            ┌─────────────┐                    │
                   │   Staged   │ ◄───────────│   Staged    │ ◄─────────────────┘
                   └────────────┘            └─────────────┘
```

Espero que isso esclareça os diferentes estados do Git.

