// Arrow Function / funcoes arrow são sempre anonimas, precisam ser atribuidas a variaveis
// sem o bloco ela tem um return inplicito, no caso de abrir bloco o return se faz necessario
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default  
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest//spread = agrupar e espalhar
//neste contexto ele trabalha como array internamente na função, somando os parametros
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))