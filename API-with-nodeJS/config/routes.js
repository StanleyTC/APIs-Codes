// Our crud will be saved here
// Nosso crud será salvo aqui

const express = require('express')
const routes = express.Router()    //router is a library from express



/* 
EN:US:array db that will be modified with the requests
PT-BR: array db que será modificada com as nossas requisições
*/
let db = [
    {'1': {Name: 'Client 1', Age: '19'}},
    {'2': {Name: 'Client 2', Age: '35'}},
    {'3': {Name: 'Client 3', Age: '20'}},
    {'4': {Name: 'Client 4', Age: '31'}},
]






// GET - search data
// we will use a get to demonstrate     usaremos o get para demonstrar
routes.get('/',(req, res) => {           //  /=default, req=request, res=response
    return res.json(db)
} )







// POST - insert data
// we will use a post to demonstrate    usaremos o post para demonstrar
routes.post('/add', (req,res)=> {
    const body = req.body
    
    if (!body)
        return res.status(400).end()

    db.push(body) // adding to db array
    return response.json(body)
})






// Delete - delete data
// we will yse a delete to demonstrate    usaremos o delete para demonstrar
routes.delete( =>{
    
})





// PUT - modificate data

module.exports = routes