function caixaEletronico(solicitado){
      
      let total = ['']
      const notas = [100, 50, 10, 5, 1]
      for(let i = 0;notas <= solicitado; i++){
          total = notas[i]
          console.log("total[i]")
          
      }
    }

console.log(caixaEletronico(200))

//
function solicitado(valor) {
     let n100 = valor/100
     valor = valor % 100
 
     console.log(Math.trunc(n100), 'notas de R$100')
 
     let n50 = valor/50
     valor = valor % 50
 
     console.log(Math.trunc(n50), 'notas de R$50') 
 
     let n10 = valor/10
     valor = valor % 10
 
     console.log(Math.trunc(n10), 'notas de R$10')
 
     let n5 = valor/5
     valor = valor % 5
 
     console.log(Math.trunc(n5), 'notas de R$5')
 
     let n1 = valor/1
     valor = valor % 1
 
     console.log(Math.trunc(n1), 'notas de R$1')
 }
 
 solicitado(58)