const vetor = [14, 67, 12, 20, 10, 28, 45, 16]
let result = 0
let fora = 0



let i = 0 
for(i = 0; i < vetor.length; i++){
      if(vetor[i] >= 10 && vetor[i] <= 20){
             result++
       }else{
              fora++
       }
}

console.log(result, fora)

