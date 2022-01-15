//json  = js object notation
const prod1 = {}
prod1.nome = 'celular ultra mega' // criando a propriedade dinamicamente
prod1.preco = 4998.90
prod1['desconto legal '] = 0.40 // evitar atributos com espaço

console.log(prod1)
const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90
     obj : {
        blabla: 1,
         obj3: {
             caraio: 2
         }
    }
}
console.log(prod2)//anotaçao literal
const prod2 = {
    nome:'Camisa Polo',
    preco: 79.9
}
//exemplo json
'{"nome": "Camisa Polo", "preco": 79.90}'