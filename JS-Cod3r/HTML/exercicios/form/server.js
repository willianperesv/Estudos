const express= require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extend: true}))// serve para decodificar informações do front pro back
app.post("/usuarios", (req, resp) =>{
    console.log(req.body)
    resp.send('Parabens! usuario incluido!')
})

app.post("/usuarios/:id", (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Parabens! Usuario alterado')
})

app.listen(3003)