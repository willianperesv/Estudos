const valores = [7.7, 8.9, 6.3, 9.2]
// manipulamos o array através de seus indices
console.log(valores[0], valores[3])
console.log(valores[4])
valores[10] = 12 // se deixar espaços não declarados o Js informa quantos espaços vazios foram deixados
valores[4] = 10
console.log(valores)
console.log(valores.length) //lenght acessa o tamanho do array ou de outras coisas

valores.push({id: 3}, false. null, 'teste')//funçao push(valores dentro) adiciona itens ao array
console.log(valores)
console.log(valores.pop())// exclui item do ARRAY, exclui o ultimo item
delete valores [0]// exclui item baseado no indice
console.log(valores)

console.log(typeof valores)// array é de tipo object