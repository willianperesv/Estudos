Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i= 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
}

const produtos = [
    {nome: 'Notebook', preco:2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199, fragil: false},
    {nome: 'Copo de vidro', preco:12.49, fragil:true},
    {nome: 'Copo de Plástico', preco:18.99, fragil: false},
]

console.log(produtos.filter2(function(p){
    return p.preco > 2400                    // nesta linha é dada a condição para que o seja efetuado o filter da função, no caso "p" é o parametro dos produtos
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filte2r(caro).filter2(fragil))