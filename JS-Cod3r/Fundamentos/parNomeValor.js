//par nome/valor
const saudacao = 'opa'// contexto léxico 1

function exec() {
    const saudacao = 'fala' // contexto lexico 2
    return saudacao
}
// objetos são grupos aninhasdos de pares nome/valor
const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereço:{

    logradouro:'Rua muito legal',
    numero: 123
}
}
console.log(saudacao)
console.log(exec())
console.log(cliente)