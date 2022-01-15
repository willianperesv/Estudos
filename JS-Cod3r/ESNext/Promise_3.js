function gerarNumerosEntre(min, max){
    if(min > max) { // nestas linhas ele atribui sempre o valor minimo como inicial
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1// estas sao as formas pra gerar valor aleatorio
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })

}
gerarNumerosEntre(1, 60)
      .then(num => num * 10)
      .then(numX10 => `numero gerado foi ${numX10}`)
      .then(console.log)