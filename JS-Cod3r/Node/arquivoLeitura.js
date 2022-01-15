const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//sincrono... ele lÊ o arquivo completamente, travando oe vent loop

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8',(err, conteudo) =>{
    const config = JSON.parse(conteudo) 
    console.log(`${config.db.host}:${config.db.port}`)
})

// aqui ele ja traz o arquivo json convertido pra objeto
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)

})
