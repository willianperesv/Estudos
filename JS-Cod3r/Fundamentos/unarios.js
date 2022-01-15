let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
// na linha acima ele declara como verdadeira a igualdade, por conta da precendencia de num1
console.log(num1 === num2)
// ja nesta linha é falso pois deu tempo de haver alteração necessaria