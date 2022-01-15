function crianca(altura1, taxa1, altura2, taxa2){
    let crianca1 = {
        nome: "João", 
        altura1: altura1,
        taxa1: taxa1
     }
    let crianca2 = {
        nome:"Maria",
        altura2: altura2,
        taxa2: taxa2
     }

    if(crianca1.altura1 <= crianca2.altura2){
        console.log(`${crianca1.nome} e a criança menor`)
           let i = 0
        for(i = 0; crianca1.altura1 <= crianca2.altura2; i++){
              crianca1.altura1 += crianca1.taxa1
              crianca2.altura2 += crianca2.taxa2
        }
          console.log(`Em ${i} Anos ${crianca1.nome}  estará maior que ${crianca2.nome}`)
    } else if(crianca2.altura2 <= crianca1.altura1) {
           console.log(`${crianca2.nome} e a criança menor`)
           let l = 0
        for(l = 0; crianca2.altura2 <= crianca1.altura1; l++) {
              crianca1.altura1 += crianca1.taxa1
              crianca2.altura2 += crianca2.taxa2
            }
             console.log(`Em ${l} anos  ${crianca2.nome} estará maior que ${crianca1.nome}`)
        }
    console.log("VENCEDORES VENCEM DORES, MENOS A MARIA QUE É PARAPLERGICA, BRINKS POBREZINHA DA MARIA")
}
crianca(140, 15, 200, 10)