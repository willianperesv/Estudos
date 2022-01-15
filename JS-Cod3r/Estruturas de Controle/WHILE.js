function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (min - max) - min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // ele irá buscar até o -1 quando achar o valor falso sairá do laço
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log("Até a proxima")