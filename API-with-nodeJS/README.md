Português/BR
# API with nodejs
No nosso caso, vamos trabalhar com uma API que o usuário vai trabalhar com métodos especificos.
Iremos criar rotas e disponibilizar a api para consumir externamente. Como trabalharemos com internet:
Protocolo HTTP.
Precisaremos instalar o node para essa aplicação
primeiro passo
comando npm init no terminal dentro da pasta irá iniciar o node. O node irá configurar um documento em JSON, onde deveremos declarar valor para cada chave dentro do node:
```
npm init

package name: <api name application here>
version: <application version here>
description: <insert a description here>
entry point: <main file>
test command: <if the project has some test command, insert here>
keywords: <insert keywords of project here, if you need to use it>
author: <insert author here>
license: <if the project has some license, insert here>

```
Quando inserirmos todos os parâmetros, o arquivo package.json será criado, com todas as informações fornecidas.

## Frameworks necessários:
* express: Após isso, iremos usar o express, que é um framework dentro do node que fornece um conjunto robusto de recursos para aplicativos web, ele utiliza protocolo http e cria uma API rápido e facil.

* body-parser: Iremos instalar o body-parser também, que realizara o parser (serialização) das informações que serão enviadas nas requisições que serão disponibizadas na API

* cors: Teremos o cors também para administrar o cors domain, e dará um pouco de segurança a nossa aplicação (posso configurar quem poderá fazer as requisições da API)

* nodemon: pacote que vai ajudar a gente com atualização na aplicação quando eu fizer uma modificação

* morgan: login ao lado do servidor: toda requisição que for feita será mostrada pra gente, e poderemos analisar: se deu certo, se não deu certo, etc. Ou seja, são os logs de requisições da API

## Comandos de instalação
```
1. npm install express
2. npm install body-parser
3. npm install morgan
4. npm install cors
5. npm install nodemon
```
Ou seja, precisamos usar o comando npm install e colocarmos o que desejamos instalar. Após darmos esse comando no terminal, a pasta node_modules será criada, com todas as dependencias desses frameworks que instalamos, e virá junto o arquivo package-lock.json!
(Por razões de segurança, não estarei upando a pasta de node_modules aqui e nem o arquivo de package-lock.json, mas ela será criada com a instalação dos frameworks)