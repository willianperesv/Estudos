//filter serve para filtrar os elementos do array em boolean

const produtos = [
    {nome: 'Notebook', preco:2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199, fragil: false},
    {nome: 'Copo de vidro', preco:12.49, fragil:true},
    {nome: 'Copo de Plástico', preco:18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.preco > 2400                    // nesta linha é dada a condição para que o seja efetuado o filter da função, no caso "p" é o parametro dos produtos
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
