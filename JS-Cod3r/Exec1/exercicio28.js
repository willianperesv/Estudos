const vetor = [1, 5, 6, 3, 4, 7, 8, 10, 2, 2, 2, 2, 2] // isso faz isso
let par = []
let impar = []

for(let i =0; i < vetor.length; i++){
    if(vetor[i] % 2 == 0){
        par++
        console.log("Maria aleijada!")
    } else {
        impar++
    }
}
console.log(par, impar)