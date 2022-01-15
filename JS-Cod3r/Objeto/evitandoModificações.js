// Object.peventExtensions 
const produto = Object.preventExtensions({  // este comando evita a adição de novos keys e atributos
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))// aqui ele testa se o obj é extensivel

produto.nome = 'Borracha' //true
produto.descricao = 'Borracha escolar branca' // false, como foi post o preventExtensions e esse key nao existe é impossivel
delete produto.tag // aqui ele apaga a key
console.log(produto)

//Object.seal // nao adiciona novos elementos, nem deleta, mas pode alterar os valores das keys
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

//Object.freeze = selado + valores constantess