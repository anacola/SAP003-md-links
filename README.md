# Markdown Links

## Índice

* [1. Resumo](#1-resumo)
* [2. Como Instalar](#2-como-instalar)
* [3. Como Utilizar](#3-como-utilizar)
* [4. Características Técnicas](#4-características-técnicas)
* [5. Roadmap](#6-roadmap)

***

## 1. Resumo

Biblioteca destinada a extrair links de arquivos markdown executável pela linha de comando.

## 2. Como instalar

Para utilizar essa biblioteca, você deve ter instalado o NodesJS no  seu computador.
Depois, você deve executar o seguinte comando no terminal:

```
$ npm install anacola/SAP003-md-links
```

## 3. Como utilizar

No terminal é executado da seguinte maneira: 

### Fazer requisição
```
$ node

const mdLinks = require('md-links')

    mdLinks('fileName').then(console.log)
```

Executar o módulo:
```
md-links <path-to-file> [option]
```



#### Valor de Retorno


Retorna promessa com uma matriz de objetos, em que cada objeto representa um link e contém as seguintes propriedades:
 
```
href: URL encontrada.
text: Texto que aparecía dentro del link.
```

## 4. Características Técnicas

- JS Vanilla;
- Node.JS;
- Git e Git Hub;
- Implementção de testes.

## 5. Roadmap

### Versão: 1.0.0

Extração de links de arquivos markdown.