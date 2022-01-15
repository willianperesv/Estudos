const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))// o .keys pega todas as chaves de um obj ex: nome, idade e peso  da const pessoa
console.log(Object.values(pessoa))//o .values puxa diretamente os valores do obj ex: rebeca, 2 , 13
console.log(Object.entries(pessoa))// .entries separa em pequenos arrays  atributos e valores de um obj

Object.entries(pessoa).forEach(e => {
       console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // aqui as propriedades e condições do obj serao definidos
    enumerable: true,   // aqui é se ela podera ser listada
    writable: false, // aqui se ela podera ser editada
    value: '01/01/2019'// aqui ela define seu valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign(ES 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3,  a:4}
const obj = Object.assign(dest, o1, o2)// o assign transfere atributos de um obj a outro

Object.freeze(obj)
obj.c= 1234
console.log(obj)