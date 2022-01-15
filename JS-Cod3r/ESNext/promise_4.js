function gerarNumerosEntre(min, max, tempo){
    if(min > max) [max, min] = [min, max] // nestas linhas ele atribui sempre o valor minimo como inicial
     return new Promise(resolve => {
        setTimeout(function() {
        const fator = max - min + 1// estas sao as formas pra gerar valor aleatorio
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    }, tempo)

    })
}   

function gerarVariosNumeros() {
    return Promise.all([ //quando todos resultados tiverem cumpridos ele vai gerar a resposta, independente do tempo
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 4000),
    ])
}
console.time('promise')//temporiza o tempo de execução das funções
  
gerarVariosNumeros()
      .then(console.log)
      .then(() => {
          console.timeEnd('promise')
      })

   