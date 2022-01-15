function printImpar(inicio, fim){
    if(fim < inicio){
        var start = fim
        var end = inicio
        for(i = 0; i < end; i++){
            if(i % 2 == 1){
                console.log(i)
            }
        }
    }
    else{
        for(i= 0; i < fim; i++ ){
            if(i % 2 == 1){
                console.log(i)
            }
        }
    }
}
printImpar(1, 10)