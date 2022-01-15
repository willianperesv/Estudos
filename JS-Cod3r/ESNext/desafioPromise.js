const fs = require('fs') //requisição via file system
const path = require('path')




function Readconteudo(caminho){
    return new Promise(resolve => {
    fs.readFile(caminho, function(_,conteudo){// primeiro parametro da funcao anonima é o erro o segundo é o conteudo
        resolve(conteudo.toString())
    })
   })  
}
const caminho = path.join(__dirname, 'dados.txt')
Readconteudo(caminho)
      .then(conteudo => conteudo.split('\n'))// quebra em varias linhas
      .then(linhas  => linhas.join(','))//separa por virgula
      .then(conteudo => `O valor final é ${conteudo}`)
      .then(console.log)
      
    