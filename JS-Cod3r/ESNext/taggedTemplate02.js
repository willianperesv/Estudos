function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `RS${valor.toFixed(2)}` // se for valor numerico ele aplica a mascara numerica pra real, senao nao faz nada
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') // aqui ele pega todos os elementou do array resultado e gera uma string
}

const preco = 29.9
const precoParcela= 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)