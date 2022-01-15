function avaliation(){
    scores = [1, 5, 2.8, 8, 9, 7]
   
    for(i = 0; i < scores.length; i++){
        switch(Math.floor(scores[i])){
            case 9: case 10:
                console.log("sua nota é", scores[i], " seu conceito é A")
                break
            case 7: case 8:
                console.log("sua nota é", scores[i], " seu conceito é B")
                break
            case 5: case 6:
                console.log("sua nota é", scores[i], " seu conceito é C")
                break
            case 0: case 1: case 2: case 3: case 4:
                console.log("sua nota é", scores[i], " seu conceito é D")
                break
                default :
                console.log("Burro BAGARAI")
                
        }
    }


}
avaliation()