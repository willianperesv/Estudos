function sample() {

  let cidades = [
   criar("cidade1","1")

]



      console.log(cidades)


}


function criar(nome, populacao, idh=0){
  //cria o objeto
let cidade = {}
//adiciona as propiedades
cidade.nome = nome
cidade.populacao = populacao
cidade.IDH = idh
//retorna o objeto preenchido
return cidade
}



