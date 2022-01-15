const sequence = {   
    __id: 1,  
    get id() { return this.__id++}  
} //sempre vai retornar o valor de id atualizado

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id //se o produto.id nao estiver setado ele recebera a const sequence
    produtos[produto.id] = produto // joga o produto.id pra dentro de produtos
    return produto
}

function getProduto(id){ 
    return produtos[id] || {}// retorna o id ou obj vazio
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos}