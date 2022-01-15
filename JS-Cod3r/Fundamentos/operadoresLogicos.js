function compras(trabalho1, trabalho2) {
    const comprarsorvete = trabalho1 || trabalho2
    const comprartv50 = trabalho1 && trabalho2
    //const comprar tv32 = !! (trabalho1 ^ trabalho2) // bitwise xor
    const comprartv32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarsorvete // operador Unário
    return { comprarsorvete, comprartv50, comprartv32, mantersaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))