function planodecarreiraCarrefour(plano){
   let salario = 1000
    switch(plano){
        case "A": aumento = salario / 100 * 10
           console.log(`Parabens seu novo salario é ${aumento + salario} agora você pode continuar matando negros na porrada`)
        break
        case "B": aumento = salario / 100 * 15
                 console.log(`Parabens seu novo salario é ${aumento + salario} Agora você pode comprar um taco de baseball e matar negros de uma forma mais brutal`)
        break
        case "C": aumento = salario / 100 * 20
        console.log(`Parabens seu novo salario é ${aumento + salario} finalmente você ganhou uma AK-47, visite uma roda de samba, você já sabe o que fazer!`)
        default:
    }
}
planodecarreiraCarrefour("A")
planodecarreiraCarrefour("B")
planodecarreiraCarrefour("C")