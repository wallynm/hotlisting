# Intro
Todos arquivos do teste estão localizados na pasta TESTE_FINAL, os arquivos dentro mq pasta TESTEFRONTEND foram mantidos apenas para referência.

### DEMO - [http://wallynm.github.io/projects/hotmart/](http://wallynm.github.io/projects/hotmart/)

---


###Plugins e frameworks utilizados
- jQuery - Para aplicação de algumas animações e controle do DOM
- Flexboxgrid - Utilizado para controle de colunas 
- Gulp - Compilação de arquivos LESS, concatenação e minificação

###Estrutura
Todos arquivos dentro de app-build são arquivos originais, sem minificação ou concatenação. O Gulp é responsável por copiar, minificar e concatenar os arquivos para o diretório público o qual serão carregados pelos arquivos HTML.

- Pasta public: Nela todos os arquivos compilados e gerados pelo gulp são armazenados, os arquivos HTML utilizam está pasta para acessar arquivos estáticos


### Build
É necessário ter o NodeJS instalado e o gerenciador de depenências bower instalado globalmente, caso não possua execute o seguitne comando no console:
```
$ bower install -g
```

Uma vez baixado o repositório execute o comando a seguir no console/terminal dentro da pasta "build-app"
```
$ npm install
$ bower install
```

- Para então compilar os arquivos e executar as tarefas do gulp e execute o seguinte comando dentro da pasta "build-app":
``` 
$ gulp
```

Ou caso deseje, também é possível executar qualquer um destes comandos de maneira isolada:
``` 
$ gulp less;
$ gulp copy-fonts;
$ gulp copy-images;
$ gulp scripts;
```

Para testar o template/app basta acessar o arquivo index.html localizado dentro da pasta TESTE_FINAL
