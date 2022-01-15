const { has } = require("lodash")

const tecnologias = new Map() //estancia apartir do Map
tecnologias.set('react', {framework: false}) //atribui chave valor apartir do .set
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react)// esta linha da undefined
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto']
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => { // aqui ele atribui chave e valor das linhas 10 ate 13
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has = contido/ boolean return
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a') 
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
// achave nunca pode repetir
console.log(chavesVariadas)