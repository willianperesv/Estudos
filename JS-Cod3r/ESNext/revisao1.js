// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r" // letra C = l/Letra C = e/ ... D3r atribuida a "tras"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y) // neste exemplo o espaço entre x e y pula um indice o resultado é 1 e 3

const { idade: i, nome } = { nome: 'Ana', idade: 9 } 
console.log(i, nome)