const moduloA = require('../../moduloA')
const moduloA = require('C:\Users\willi\Desktop\Cod3r\exerciciosJS\Node\ModuloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola)

const http = require('http')
http.createServer((req, res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)