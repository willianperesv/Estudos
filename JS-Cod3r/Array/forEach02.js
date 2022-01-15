Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }//acima ele mostra toda estrutura de um forEach 
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel',]

aprovados.forEach2(function(nome, indice){
    console.log(` ${nome}`)
})