function lanches(Cod, quant){
    switch(Cod){
        case 100: dog = 3
        return console.log(`Seu Cachorro-Quente custa R$ 3,00 , ${quant} unidades, Total de R$${dog*quant}`)
        case 200: hamburger = 4
        return console.log(`Seu Hamburger Simples custa R$ 4,00, ${quant} unidades, Total de R$${hamburger*quant}`)
        case 300: Chesb = 5.5
        return console.log(`Seu Cheesburger custa R$ 5,50 ${quant} unidades, Total de R$${Chesb*quant}`)
        case 400: Bauru = 7.5
        return console.log(`Seu Bauru custa R$ 7,50 ${quant} unidades, Total de R$${Bauru*quant}`)
        case 500: Refri = 3.5
        return console.log(`Seu Refrigerante custa R$ 3,50. ${quant} unidades, Total de R$${Refri*quant}`)
        case 600: Suco = 2.8
        return console.log(`Seu Suco custa R$ 2,80, ${quant} unidades, Total de R$${Suco*quant}`)
        default: return console.log("Codigo Invalido!")
    }
}
lanches(100, 2)
lanches(200, 3)
lanches(300, 4)
lanches(400, 6)
lanches(500, 2)
lanches(600, 1)