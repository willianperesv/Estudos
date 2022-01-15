const numeros = [2, 15, 27, 49, 32, 12, 41]

let total = 0

for(i = 0; i < numeros.length; i++){
    total += numeros[i] / numeros.length
}
console.log(total)