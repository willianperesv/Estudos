function verificaString(string1, string2){
    let estaContido = true
    for(let i = 0; i < string1.length; i++){
     let caracterString1 = string1.charAt(i).toLowerCase()
      for(let j = 0; j < string2.length; j++){
         let caracterString2 = string2.charAt(j).toLowerCase()
          if( caracterString1 == caracterString2){
              estaContido = true
              break
          } else{
              estaContido = false
          }
      }
 
    }
    return estaContido
}
console.log(verificaString('wil', 'liw'))