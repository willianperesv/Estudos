const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro // o pop remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // push adiciona na ultima posicao o verstapen
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na posicao 0
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera umm novo apartir do indice especificado()novo array
console.log(algunsPilotos1)

const algunsPilotos2= pilotos.slice(1, 4)
console.log(algunsPilotos2)