//funcao sem retorno
function imprimirSoma(a, b) {  
    console.log(a + b)
}
imprimirSoma(2, 3)// aqui ele atribui os parametros a A e B e executa
imprimirSoma(2) // neste caso ele atribui o primeiro valor e o segundo é undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// ele atribui os dois primeiros valores as variaveis e ignora os demais valores
imprimirSoma()//NaN

// FUNCAO COM RETORNO

function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())