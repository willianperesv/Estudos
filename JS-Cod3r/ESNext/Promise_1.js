function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
        return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()
let p = new Promise(function(cumprirPromessa){ // para fazer uma promise ela tem terá uma nova function
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])//que retornará em forma de objeto o resultado da function
}) //cumprirPromessa = resolve
// ele sempre retorna apenas 1 elemento, nunca dois ou mais
 // no caso o elemento aqui é o array, entao retorna todo array


// o then também recebe function como parametro
     .then(primeiroElemento)//pegou primeiro elemento
     .then(primeiraLetra)// pegou primeira letra
     .then(letraMinuscula)// transformou pra minuscula
     .then(console.log)// como a funcao then é acumulativa, o log é implicito neste caso
    // .then(valor => valor[0]) // aqui ele pega o primeiro elemento do array[Ana]
    // .then(primeiro => primeiro[0])// nesta linha ele ja recebe o resultado da linha acima, entao ele pega a primeira letra do primeiro item do Array [A]
    // .then(letra => letra.toLowercase())// transform o resultado acima pra minuscula
    //.then(letraMInuscula = console.log(letra))