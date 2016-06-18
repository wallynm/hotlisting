# Intro
Todos arquivos do teste estão localizados na pasta TESTE_FINAL, os arquivos dentro mq pasta TESTEFRONTEND foram mantidos apenas para referência.

###Plugins e frameworks utilizados
- jQuery - Para aplicação de algumas animações e controle do DOM
- Flexboxgrid - Utilizado para controle de colunas 
- Gulp - Compilação de arquivos LESS, concatenação e minificação

###Estrutura
Todos arquivos dentro de app-build são arquivos originais, sem minificação ou concatenação. O Gulp é responsável por copiar, minificar e concatenar os arquivos para o diretório público o qual serão carregados pelos arquivos HTML.

- Pasta public: Nela todos os arquivos compilados e gerados pelo gulp são armazenados, os arquivos HTML utilizam está pasta para acessar arquivos estáticos

- Compilar arquivos: Para rodar as tarefas do gulp é necessário acessar a pasta de build-app e executar o comando:
``` 
$ gulp
```

Ou caso deseje, também é possível executar qualquer um destes comandos de maneira isolada:
``` 
$ gulp less;
$ copy-fonts;
$ gulp copy-images;
$ gulp scripts;
```

Para testar o template/app basta acessar o arquivo index.html localizado dentro da pasta TESTE_FINAL
