English/US
# API with nodejs
In our case, we are going to work with an API that the user will work with specific methods.
We will create routes and make the api available for external consumption. How we will work with internet:
HTTP protocol.
We will need to install node for this application
first step
npm init command in terminal inside folder will start node. The node will configure a document in JSON, where we must declare value for each key inside the node:
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
When we enter all the parameters, the package.json file will be created, with all the information provided.

## Required frameworks:
* express: After that, we will use express, which is a framework inside node that provides a robust set of features for web applications, it uses http protocol and creates a quick and easy API.

* body-parser: We will also install the body-parser, which will perform the parser (serialization) of the information that will be sent in the requests that will be made available in the API

* cors: We will also have cors to administer the cors domain, and it will give our application a bit of security (I can configure who can make the API requests)

* nodemon: package that will help us update the application when I make a change

* morgan: login at the server side: every request that is made will be shown to us, and we will be able to analyze: if it worked, if it didn't work, etc. That is, they are the logs of API requests

## Installation commands
```
1. npm install express
2. npm install body-parser
3. npm install morgan
4. npm install cors
5. npm install nodemon
```
That is, we need to use the npm install command and put what we want to install. After giving this command in the terminal, the node_modules folder will be created, with all the dependencies of these frameworks that we installed, and the package-lock.json file will come together!
(For security reasons, I won't be uploading the node_modules folder here nor the package-lock.json file, but it will be created with the frameworks installation)
Also notice that the frameworks are properly added in our package.json

Within scripts in package.json, I put "start": "nodemon index.js", then I created a command called start, and when I give it with npm start, it will run nodemon and wait for modifications, which is one of the features we want from nodemon

## index.js


Initially we will create variables to store all the dependencies of our frameworks, except for nodemon (it is configured in package.json)
```
const express = require('express') 
const morgan = require('morgan')  
const cors = require ('cors')
const bodyParser = require('body-parser')
```
EN: To start our server, I will create the app variable that will receive the express

const app = express()



Our application is currently empty, so we will start parameterizing
* First thing: add morgan so it has all run logs (app.user(morgan('dev')))
* Second thing: add the bodyParser
* Third thing: add the express, determining that the data types we want to receive is json
* Fourth thing: add the cors
* Fifth thing: turn on the server, we will put it on port 30000
* Sixth thing: between cors and our server block, we will create a variable that will receive an array
        and it will work as a database, to make requests available for other solutions
        able to consume our api

We will use the http protocol, which has 4 operations: fetch data (get), insert data (post), modify data (put) and delete data (delete).

We will then have an app.get to generate a get, but the browser only shows us the get. To simulate the other requests, we will use a tool called postman

When inserting the post, I can send a body in json to our db array, like this (for example):
```
{
    "4": {
        "Name": "Client 5",
        "Age": "26"
    }
}
```
And this information will be added to my body total!

Now we must remove this put and this get from the index, just for the sake of organization, our index is completely messed up, we will then create a folder called config, and inside the config folder, we will have a file called routes.js, and in that file yes we will save all these requests, so the index will be cleaner (we must declare it in main, which will be on line 7, and the application will use the declaration given on line 17)
* .
* .
* .
* .
* .

Portugu??s/BR
# API com nodejs
No nosso caso, vamos trabalhar com uma API que o usu??rio vai trabalhar com m??todos especificos.
Iremos criar rotas e disponibilizar a api para consumir externamente. Como trabalharemos com internet:
Protocolo HTTP.
Precisaremos instalar o node para essa aplica????o
primeiro passo
comando npm init no terminal dentro da pasta ir?? iniciar o node. O node ir?? configurar um documento em JSON, onde deveremos declarar valor para cada chave dentro do node:
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
Quando inserirmos todos os par??metros, o arquivo package.json ser?? criado, com todas as informa????es fornecidas.

## Frameworks necess??rios:
* express: Ap??s isso, iremos usar o express, que ?? um framework dentro do node que fornece um conjunto robusto de recursos para aplicativos web, ele utiliza protocolo http e cria uma API r??pido e facil.

* body-parser: Iremos instalar o body-parser tamb??m, que realizara o parser (serializa????o) das informa????es que ser??o enviadas nas requisi????es que ser??o disponibizadas na API

* cors: Teremos o cors tamb??m para administrar o cors domain, e dar?? um pouco de seguran??a a nossa aplica????o (posso configurar quem poder?? fazer as requisi????es da API)

* nodemon: pacote que vai ajudar a gente com atualiza????o na aplica????o quando eu fizer uma modifica????o

* morgan: login ao lado do servidor: toda requisi????o que for feita ser?? mostrada pra gente, e poderemos analisar: se deu certo, se n??o deu certo, etc. Ou seja, s??o os logs de requisi????es da API

## Comandos de instala????o
```
1. npm install express
2. npm install body-parser
3. npm install morgan
4. npm install cors
5. npm install nodemon
```
Ou seja, precisamos usar o comando npm install e colocarmos o que desejamos instalar. Ap??s darmos esse comando no terminal, a pasta node_modules ser?? criada, com todas as dependencias desses frameworks que instalamos, e vir?? junto o arquivo package-lock.json!
(Por raz??es de seguran??a, n??o estarei upando a pasta de node_modules aqui e nem o arquivo de package-lock.json, mas ela ser?? criada com a instala????o dos frameworks)
Repare tamb??m que os frameworks goram devidamente adicionados no nosso package.json

Dentro de scripts em package.json, eu coloquei "start": "nodemon index.js", ent??o criei um comando chamado start, e quando eu der ele com npm start, ir?? executar o nodemon e ficar?? esperando modifica????es, que ?? uma das funcionalidades que desejamos do nodemon

## index.js


Inicialmente criaremos variaveis para armazenar todas as dependencias dos nossos frameworks, exceto nodemon (ele est?? configurado em package.json)
```
const express = require('express') 
const morgan = require('morgan')  
const cors = require ('cors')
const bodyParser = require('body-parser')
```

PT-BR: Para iniciar nosso servidor, criarei a vari??vel app que receber?? o express

const app = express()



Nossa aplica????o at?? o momento est?? vazia, iremos ent??o come??ar a parametrizar
* Primeira coisa: adicionar o morgan para que tenha todos os logs de execu????o (app.user(morgan('dev')))
* Segunda coisa: adicionar o bodyParser
* Terceira coisa: adicionar o express, determinando que os tipos de dados que iremos queremos receber ?? json
* Quarta coisa: adicionar o cors
* Quinta coisa: ligar servidor, colocaremos na porta 30000
* Sexta coisa: entre o cors e o nosso bloco de servidores, iremos criar uma vari??vel que receber?? um array
        e funcionar?? como um banco de dados, para disponibilizarmos requisi????es para outras solu????es
        conseguirem consumir nossa api

Usaremos o protocolo http, que temos 4 opera????es: buscar dados(get), inserir dados(post), modificar dados(put) e deletar dados(delete).

Teremos ent??o um app.get para gerarmos um get, mas o navegador s?? nos mostra o get. Para simularmos as demais requisi????es, usaremos uma ferramenta chamada postman

Ao inserir o post, eu posso enviar um body em json para o nosso array db, da seguinte forma (por exemplo):
```
{
    "4": {
        "Name": "Client 5",
        "Age": "26"
    }
}
```
E essa informa????o ser?? acrescida ao meu body total!

Agora deveremos remover esse put e esse get do index, apenas por uma quest??o de organiza????o, nosso index est?? totalmente bagun??ado, iremos ent??o criar uma pasta chamada config, e dentro da pasta config, teremos um arquivo chamado routes.js, e nesse arquivo sim salvaremos todas essas requisi????es, assim o index ficar?? mais limpo (deveremos declarar na main, que ficar?? na linha 7, e a aplica????o far?? uso na declara????o dada na linha 17)
