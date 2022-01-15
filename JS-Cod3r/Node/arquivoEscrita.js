const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.88,
    desconto:0.15
}


//aqui ele gera um arquivo com o objeto acima
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})