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
// recurso ES8
// o OBjetivo é simplificar o promises deixado ele mais sincrono
//Primeira coisa é criar uma funcao e marcar ela com a palavra async
// Await só funcionara dentro de uma funçao marcada com "async"

let obterAlunos = async() => { // funcao sem parametro
    const ta = await getTurma('A') // sempre que estiver lidando com funão que retorna promisse 
    const tb = await getTurma('B') //esta marcacao só vai pro proximo passo se estiver resolvida ou com erro
    const tc = await getTurma('C')
    // as tres funcao são aparentemente sincronas, mas sao asyncronas
    return [].concat(ta, tb, tc)
}

 obterAlunos()
      .then(alunos => alunos.map(a => a.nome))
      .then(nomes => console.log(nomes))