// o obejtivo destes comandos é tratar o erro de forma que o usuario não receba a mensagem de erro de forma crua

function tratarErroElancar(erro) {
   // throw new Error('...')
   //throw 10
   //throw true
   //throw 'message
   throw {
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}
function imprimirNomeGritado(obj) {
    try {             // um possivel erro que o dev acredita que pode ocorrer ele pode por dentro de TRY
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){// o que foi feito em TRY será passado pra CATCH QUE ENVIARÁ PARA THROW
        tratarErroElancar(e)
    } finally {// FINALLY  sempre será exposto
        console.log('final')
    }
}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)