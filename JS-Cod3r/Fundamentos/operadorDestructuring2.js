const [a] = [10] //variavel(array) "a" já recebe o seu primeiro valor[10]
console.log(a)

const [n1, ,n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)