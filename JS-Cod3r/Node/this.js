console.log(this === global) //false
console.log(this === module)// false

console.log(this === module.exports)// true
console.log(this === exports)// true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo =  ",,,"
}
// dentro de uma funçao o this nao aponta pra exports enem module exports, ele aponta apara global
logThis()