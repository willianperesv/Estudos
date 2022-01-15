const vetor = [27, -15, 6, 4, 3, 2, -1]

let negativos = 0

for(var i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
        negativos++
    }
}

console.log(negativos)