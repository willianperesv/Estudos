//sem promisse...

const http = require('http')// este require significa que o arquivo virá por um http

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { //aqui através da URL ele requisita e responde atraves do url, res
        let resultado = '' // neste metodo ele vai pegando dados parciais e montando o dado completo

        res.on('data', dados => {  // envento de resposta 
            resultado += dados
        })
        res.on('end', () =>{ // depois que os dados chegarem este metodo finaliza
            callback(JSON.parse(resultado))// aqui ele envia pro callback de quem chamou a funcao os dados em json
        })
    })
}

let nomes = []
getTurma('A', alunos => { // parametros da linha 5  que trocam o endereço do json
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))// aqui ele mapea e concatena os nomes da turma A
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})