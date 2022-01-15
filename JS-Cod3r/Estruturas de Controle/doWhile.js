function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (min - max) - min
    return Math.floor(valor)
}

let opcao = -1

do{// ele irá executar diretamente até entrar no while
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)  // quando encontrar este resultado ele sairá do laço

console.log("Até a proxima")