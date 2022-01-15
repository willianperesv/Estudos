let stringpontos = "55, 35, 34, 29, 27, 87, 02, 17"

function comparapontos (stringpontos){
     let pontuacoes = stringpontos.split(", ")
     let record = 0
     let piorjogo = 1
     let maiorpontuacao = pontuacoes[0]
     let menorpontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++) {
         if(pontuacoes[i] > maiorpontuacao){
              maiorpontuacao = pontuacoes[i]
              record++
         }
         else if(pontuacoes[i] < menorpontuacao){
              menorpontuacao = pontuacoes[i]
              piorjogo = i+1;
         }
    }
         return[record, piorjogo]

}
    console.log(comparapontos(stringpontos))
    










