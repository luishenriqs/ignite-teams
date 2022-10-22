# INSTRUÇÕES DE CONFIGURAÇÕES

## Path Mapping

### BABEL PLUGIN MODULE RESOLVER 

https://www.npmjs.com/package/babel-plugin-module-resolver

***Instalação do pacote:***
    $ npm install --save-dev babel-plugin-module-resolver

***Especificação dos alias no arquivo babel.config.js:***
        Exemplo:
            plugins: [
                [
                    'module-resolver', 
                    {
                        root: ['./src'],
                        alias: {
                        '@routes': './src/routes',
                        '@pages': './src/pages',
                        '@utils': './src/utils',

                        },
                    },
                ],

***Configuração das tipagens no arquivo tsconfig.json:***
    Exemplo:
        "baseUrl": "./",
        "paths": {
            "@routes/*": [
                "./src/routes/*"
            ],
            "@pages/*": [
                "./src/pages/*"
            ],
            "@utils/*": [
                "./src/utils/*"
            ]
        }