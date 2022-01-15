// a funcao "map" serve para transformar um Array em outro, se o array for post em map tiver 3 elementos
// entao o array criado terá igualmente 3 elementos porém com seus dados transformados

const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
//obs o 'map sempre precisa gerar um novo array, neste caso o "resultado" esta recebendo este array com o valor do maps

const soma10 = e => + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)