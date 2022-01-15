/*  CRUD - SÃO AS 4 OPERAÇÕES BASICAS DE BANCO DE DADOS (PPGD)
   Create (post)
   read(get)
   upade (put)
   delete(delete)*/



const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados') 

app.use(bodyParser.urlencoded({ extend: true})) // este middleware serve para transferir as informações de url para obj, linha 22


app.get('/produtos', (req, res, next) => {   
   res.send(bancoDeDados.getProdutos())
})//pelo metodo get se obtem a lista de produtos

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
     
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON

})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})
app.listen(porta, () =>{
    console.log(`Servidor Esta executando na porta ${porta}.`)
})