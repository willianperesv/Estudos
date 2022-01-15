const nome = 'Rebeca'
const concatenacao = 'Olá' + nome +'!'
const template =`
 olá
 ${nome}!
`
console.log(concatenacao, template)
//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()//funcao arrow, 
console.log(`ei... ${up('cuidado')}!`)// o up virou funcao arrow, que corresponde a linha acima! FODA
