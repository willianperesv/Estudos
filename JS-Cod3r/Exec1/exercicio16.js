function calculadora(n1, n2, op){
    switch(op){
        case "+":
            console.log(` o resultado é ${n1 + n2} `)
            break
         case "*":
            console.log(` o resultado é ${n1 * n2} `)
            break
        case "-":
            console.log(` o resultado é ${n1 - n2} `)
            break
         case "/":
            console.log(` o resultado é ${n1 / n2} `)
            break
            default:
    }
}
calculadora(2,2,"+")
calculadora(2,2,"*")
calculadora(2,2,"-")
calculadora(2,2,"/")