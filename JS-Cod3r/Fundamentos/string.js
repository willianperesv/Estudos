const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))//retorna nulo
console.log(escola.charCodeAt(3))// retorna codigo unicode
console.log(escola.indexOf('3'))// retorna o indice 3
console.log(escola.substring(1))// anula o indice entre ()
console.log(escola.substring(0, 3))// vai do indice 0, até o indice 3 sem incluir o indice 3
console.log('Escola'.concat(escola).concat('!'))//concatena as strings de uma variavel
console.log(escola.replace(3,'e'))// substitui uma letra apartir do indice
console.log('Ana,Maria,Pedro'.split(','))//o split transforma em array a string(FODA)