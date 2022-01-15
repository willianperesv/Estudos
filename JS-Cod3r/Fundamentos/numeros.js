const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // este commando responderá se o valor é inteiro

//ele responderá como sendo verdadeiro ou falso
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))// toFixed não altera o valor da variavel, apenas exibe da forma determinada pelo()


console.log(media.toString(2))//neste exemplo, o comando toString, converte numero em binário
console.log(typeof media)
console.log(typeof Number)