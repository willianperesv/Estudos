//com promise

const http = require('http')// este require significa que o arquivo virá por um http

const getTurma = letra  => { // é o parametro
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => { //aqui através da URL ele requisita e responde atraves do url, res
            let resultado = '' // neste metodo ele vai pegando dados parciais e montando o dado completo
    
            res.on('data', dados => {  // envento de resposta 
                resultado += dados
            })
            res.on('end', () =>{ // depois que os dados chegarem este metodo finaliza
                try{
                resolve(JSON.parse(resultado))// se os dados chegarem corretamente ele irá aplicar o "resolve" para o jsonparse
                } catch(e){
                    reject(e) // se der algum erro na requisição ele irá chamar o reject (e)
                }
            })
        })
    })
}
    

/*let nomes = []
getTurma('A').then(alunos => { // o then é quando for passado A ele vai na arrow function alunos e vai mapear
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))// aqui ele mapea e concatena os nomes da turma A
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])// quando todas requisições derem certo ou rejeitadas ele começa a compor o resultado
       
       .then(turmas => [].concat(...turmas))// aqui ele gera um unico array com todos alunos
       .then(alunos => alunos.map(aluno => aluno.nome))// chama os alunos pelo nome
       .then(nomes => console.log(nomes))

       getTurma('D').catch(e => console.log(e.message))// teste para ver se ele trata o erro