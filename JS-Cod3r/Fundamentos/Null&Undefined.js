// ATRIBUIÇÃO POR REFERÊNCIA
const a = {name: 'Teste'}

const b = a

b.name = 'opa' // A fazer esta mudança, o que muda é o endereço do objeto
// muda nas duas variaveis, no caso é "Name" que muda

// EM TIPOS PRIMITIVOS, ATRIBUIÇÃO É FEITA POR VALOR!


let valor 
console.log(valor)//aqui o valor da 'undefined'
console.log(valor2)// 'valor2 is not defined' isto é, o valor não nem declarado

valor = null // não tem nenhum valor ou endereço. ausencia de valor
console.log(valor)// retorna null
//console.log(valor.toString())// não pode acessar por conta do TypeError

const produto = {}
console.log(produto.preco.a)
console.log(produto)
produto.preco = 3.5

console.log(produto)

produto.preco = undefined // evite atribuir undefined
// delete produto.preco
console.log(!!produto.preco)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)

