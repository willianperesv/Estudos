function changeVetor(vetor1, vetor2) {
     if(vetor1.length == vetor2.length){
         for(let i = 0; i < vetor1.length; i++){
             vetor1[i] = vetor1[i] + vetor2[i]
             vetor2[i] = vetor1[i] - vetor2[i]
             vetor1[i] = vetor1[i] - vetor2[i]
         }
     } else {
         console.log("Array de tamanho incompativel")
     }

   console.log('Novo Vetor 1 ' + vetor1)
   console.log('Novo Vetor 2 ' + vetor2)
} 
    let vetor1 =  [1, 2, 3]
    let vetor2 =  [4, 5, 6]
changeVetor(vetor1, vetor2)