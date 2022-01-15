console.log(typeof String)// tipo funcao
console.log(typeof Array)// tipo funcao
console.log(typeof Object)// funcao
//toda funcao tem atributo prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
    //         separa     reverte a ordem    e  junta as letras
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() { // aqui ele cria uma funcao para tornar o indicice0 em um
    
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())