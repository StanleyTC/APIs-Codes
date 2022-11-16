const express = require('express') 
const morgan = require('morgan')  
const cors = require ('cors')
const bodyParser = require('body-parser')
const { response } = require('express')

const routes = require('./config/routes') //it will be explained at README FILE

const app = express()


app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.unsubscribe(cors())

app.use(routes)

// 
// let db = [], GET and POST moved to routes.js
// let db = [], Get e POST movidos para routes.js

app.listen(21262, () =>{
    console.log(`Express started at http://localhost:30000`)
})
