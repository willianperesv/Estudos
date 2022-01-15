console.log(typeof Array, typeof new Array, typeof []) 
// um array é um objeto internamente, quando estanciado pelo 'new' ele mostra isso, mas o typeof Array é posto como função

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') //adicionou elementento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovaods[8] === undefined)

console.log(aprovados)
aprovados.sort() // este comando reorganiza o array eliminando espaços vazios e classificando os elementos por ordem alfabetica ou numercia crescente


delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Julia') // este
// em forma numerica tipo 1, 2/ ele apaga o indice, porém em quando esta entre'Julia ' ele
console.log(aprovados)