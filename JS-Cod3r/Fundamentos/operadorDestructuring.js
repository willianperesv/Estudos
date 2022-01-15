//Novo recurso ES2015
const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro:'RuaABC',
    numero: 1000
}
}
const { nome, idade} = pessoa // tira as propriedades nome e idade do Object pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa// muda o nome das propriedades de pessoa (nome para n, idade para i)
console.log(n,i)

const {sobrenome , bemHumorada = true} = pessoa// seta propriedade como true
console.log(sobrenome, bemHumorada)

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

const { conta: {ag,num } } = pessoa// exemplo para mostrar que os valores precisam esar setados

console.log(ag, num)