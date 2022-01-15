function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=> {
        if(Math.random() < chanceErro){ // gera um resultado entre 0 e 1 e compara com a chance de erro
            reject('Ocorreu um erro!')// se o resultado for menor ele irá rejeitar
        }else{
            resolve(valor)// se der certo irá resolver
        }
    })
}
/*  TRATANDO COM TRY/CATCH
function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=> {
       try{
        if(Math.random() < chanceErro){ // gera um resultado entre 0 e 1 e compara com a chance de erro
            reject('Ocorreu um erro!')// se o resultado for menor ele irá rejeitar
        }else{
            resolve(valor)// se der certo irá resolver
        }
       } catch(e) { // SE O TRY NAO SE CONFIRMAR ELE PASSA PARA O CATCH
         reject(e)  
       }  
    })
}*/


funcionarOuNao('Testamdp...', 0.5)
       .then(v => `Valor: ${v}`)
       .then(
           v => consol.log(v),
          // err => console.log(`Erro esp.: ${err}`)// se tratar o erro dentro de then o catch nao sera chamado
       )
       .then(() => console.log('Quase Fim!'))
       .catch(err => console.log(`Erro Geral: ${err}`))// o catch trata o erro
       .then(()=> console.log('Fim!'))
       //catch geralmente fica no fim

