
//construcao da funcao map
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0: i < globalThis.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]
// neste exercicio ele pede que sejam mostrados apenas os preços deste JSON acima
//primiero é preciso converter o JSON para Object
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
