function plano(idade){
    const valor = 100
    if(idade < 10){
        console.log(`o total do seu plano é de R$${valor + 80}`)
    }else if(idade < 30){
        console.log(`o total do seu plano é de R$${valor + 50}`)
    }else if(idade < 60){
    console.log(`o total do seu plano é de R$${valor + 95}`)
    }else if(idade > 60 ){
    console.log(`o total do seu plano é de R$${valor + 130}`)
    }else{
    console.log("ERRO idade inválida")
}
}

plano(9)
plano(11)
plano(32)
plano(45)
plano(61)
plano("veiao")