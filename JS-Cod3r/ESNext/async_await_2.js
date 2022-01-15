function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max] // nestas linhas ele atribui sempre o valor minimo como inicial
    return new Promise((resolve, reject) => {
        const fator = max - min + 1// estas sao as formas pra gerar valor aleatorio
        const aleatorio = parseInt(Math.random() * fator) + min
       if(numerosProibidos.includes(aleatorio)){
          reject('Numero repetido!')
       }else{
              resolve(aleatorio)
       }
     })
}

async function gerarMegoSena(qtdeNumeros, tentativas = 1){
   try{
    const numeros = []
    for (let _ of Array(qtdeNumeros).fill()){ //aqui ele vai percorrer o array na quantidade de numeros que ele tem
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
        //o await fica sempre junto da função que vai retornar uma promise
    }
    return numeros
} catch(e) {
    if(tentativas > 10){
    throw "que chato!!!"
}else{
    return gerarMegoSena(qtdeNumeros, tentativas + 1)
}
}
}

gerarMegoSena(15)
      .then(console.log)
      .catch(console.log)
