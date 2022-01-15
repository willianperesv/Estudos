const alunos = [
    {nome:'João', nota: 7.9},
    {nome:'Maria', nota:9.2}
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)// nesta linha ele divide o total pelo numero de alunos
// de 6 a 11 ele faz o array percorrer os elementos extraindo a nota dos alunos e mandando para total1

//Declarativo
const getNota = aluno => aluno.nota // aqui ele pega a nota do aluno
const soma = (total, atual) => total + atual// aqui soma
const total2 = alunos.map(getNota).reduce(soma)//aqui ele integra as funções dandndo o resultado total
console.log(total2 / alunos.length)