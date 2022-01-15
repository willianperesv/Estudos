/*let vetor1 = [ 23, 55, 31]
function firstFunc(vetor1, int){
       let result =[]
   vetor1.forEach(function(){
       vetor1 * int
       return result

   })
    
}
console.log(firstFunc(vetor1, 5))*/

var vetor1 = [2, 4, 5, 6]
 
 function funcao1(vetor1, int) {
    var multiplicação1 = [] 

   vetor1.forEach(int2 => {
    multiplicação1.push(int2 * int)
   })
    console.log(multiplicação1)
 }
 function funcao2(vetor1, int) {
    var multiplicação2 = [] 
    for(i = 0; i < vetor1.length; i++){
       if(vetor1[i] >= 5){
        multiplicação2.push(vetor1[i] * int) 
        
    }}
    console.log(multiplicação2)
 }

 funcao1(vetor1, 2)
funcao2(vetor1, 2)