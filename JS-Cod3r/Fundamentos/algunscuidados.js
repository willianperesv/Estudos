console.log(7 / 0)  //infinity
console.log("10" / 2)// ele lê o conteudo e processa sem determinar como string
console.log('3' + 2)// o + faz sentido no contexto string, demais operadores não, portanto JS concatena o sinal de + 
console.log("show!" * 2)//NaN
console.log(0.1 + 0.7)// numero longo por conta de ponto flutuante
//console.log(10.toString())erro
console.log((10.345).toFixed(2))//jeito certo de determinar numero como string