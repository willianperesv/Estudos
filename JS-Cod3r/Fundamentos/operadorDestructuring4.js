function rand([min= 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // nesta linha ele desestrutura e o array e atribiu o min ao max
    const valor = Math.random() * (max- min) + min// nesta linha desloca o resultado entre o min e max
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())