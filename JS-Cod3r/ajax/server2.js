const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const multer = require('multer')// interpreta o forumlario do upload

const storage = multer.diskStorage({// esta funcao vai definir os nomes  dos arquivos que serao recebidos
  destination: function(req, file, callback){
      callback(null, './upload')
  },
  filename: function (req, file, callback){
      callback(null, `${Date.now()}_${file.originalname}`)
   }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload',(req, res) =>{
    upload(req, res, err =>{
        if(err) {
            return res.end('Ocorreu um erro')
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {//funccao trata req do tipo post do /formulario
    res.send({
        ...req.body,
        id: 1
    })// retorna tudo que veio mais o id como resposta
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.use(express.static('.'))//para "todos" arquivos staticos da aplicação
app.use(bodyParser.urlencoded({ extend: true }))
app.use(bodyParser.json())// se "VINHÉR" um json dentro do body da requisao ele converte pra objeto

app.get('/teste', (req,res) => res.send(new Date))//quando vem req do tip GET ele retorna o ok
app.listen(8080, () => console.log('Executando...'))