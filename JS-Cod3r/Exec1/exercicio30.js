const vetor = [28, 25, 89, 62, 50, 12, 11, 40]

let maior = 0
let menor = vetor[0]
let i = 0

for(i = 0;i < vetor.length; i++){
    if(vetor[i] < menor){
        menor = vetor[i]
    }else if(vetor[i] >= maior){
        maior = vetor[i]
}
}
console.log(menor, maior)