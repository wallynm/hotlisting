# Intro
Todos arquivos do teste estão dentro da pasta TESTE_FINAL, os arquivos dentro da pasta de TESTEFRONTEND foram mantidos apenas para referência.

###Plugins e frameworks utilizados
- jQuery - Para aplicação de algumas animações
- Flexboxgrid - Utilizado para definição das colunas 
- Gulp - Compilação dos arquivos LESS e concatenação

###Estrutura
Todos arquivos dentro de app-build são arquivos originais, sem minificação ou concatenação, novas imagens, arquivos less, fontes são adicionados nesta pasta, um processo de build executado pelo gulp então executa o trabalho de envialos para a pasta public o qual serão carregados pelos arquivos HTML - Desta forma é fácil manter todo o projeto organizado assegurando que todos arquivos passem pelo processo do gulp.

- Pasta public: Nela todos os arquivos compilados e gerados pelo gulp são armazenados, os arquivos HTML utilizam está pasta para acessar arquivos estáticos

- Compilar arquivos: Para rodar as tarefas do gulp é necessário acessar a pasta de build-app e executar o comando:
``` 
gulp
```

Ou caso deseje também é possível qualquer um destes comandos de maneira isolada:
``` 
$ gulp less;
$ copy-fonts;
$ gulp copy-images;
$ gulp scripts;
```

