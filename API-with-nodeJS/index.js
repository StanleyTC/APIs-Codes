const express = require('express') 
const morgan = require('morgan')  
const cors = require ('cors')
const bodyParser = require('body-parser')

const app = express()


app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.unsubscribe(cors())


let db = [
    {'1': {Name: 'Client 1', Age: '19'}},
    {'2': {Name: 'Client 2', Age: '35'}},
    {'3': {Name: 'Client 3', Age: '20'}},
    {'4': {Name: 'Client 4', Age: '31'}},
]

app.listen(21262, () =>{
    console.log(`Express started at http://localhost:30000`)
})
