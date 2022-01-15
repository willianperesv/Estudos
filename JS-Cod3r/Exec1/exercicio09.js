function avaliacao(nota){
   let corrigiprova = arrendondar(nota)
 
   if(corrigiprova <= 39){
    console.log(` Sua nota foi ${corrigiprova}, Você foi Reprovado!`)
   }else{
       console.log(` sua nota foi ${corrigiprova}Parabéns Vai ser Uber!`)
   }

}

function arrendondar(nota){
  if (nota % 5 > 2){
    return nota + (5 - (nota % 5))
  } else{
    return nota
  }

}
avaliacao(38)