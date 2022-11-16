/*
EN-US: Initially we will create variables to store all the dependencies of our frameworks
PT-BR: Inicialmente criaremos variaveis para armazenar todas as dependencias dos nossos frameworks
*/
const express = require('express') 
const morgan = require('morgan')  
const cors = require ('cors')
const bodyParser = require('body-parser')
/*
PT-BR: Para iniciar nosso servidor, criarei a variável app que receberá o express
EN-US: To start our server, I will create the app variable that will receive the express
*/
const app = express()


/*
EN-US:
    Our application is empty so far, so we will start parameterizing
    .First thing: add morgan, so, we will have all execution logs (app.user(morgan('dev')))
    .Second thing: add the bodyParser
    .Third thing: add the express, determining that the data types we want to receive is json
    .Fourth thing: add the cors
    .Fifth thing: turn on the server, we will put it on port 30000
PT-BR:
    Nossa aplicação até o momento está vazia, iremos então começar a parametrizar
    .Primeira coisa: adicionar o morgan para que tenha todos os logs de execução (app.user(morgan('dev')))
    .Segunda coisa: adicionar o bodyParser
    .Terceira coisa: adicionar o express, determinando que os tipos de dados que iremos queremos receber é json
    .Quarta coisa: adicionar o cors
    .Quinta coisa: ligar servidor, colocaremos na porta 30000
*/
app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.unsubscribe(cors())

app.listen(21262, () =>{
    console.log(`Express started at http://localhost:30000`)
})