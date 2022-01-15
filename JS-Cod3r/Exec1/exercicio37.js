function AriProgression(n, a1, r){
     for(i = 0; i < n; i++){
         console.log(a1 + r*i)
     }
     console.log('Soma:' + (n *(a1+ (a1 + ((n - 1) *r)))) / 2)
  }
//Sn = a1 . (qn – 1)/(q – 1) // Sn = n . (a1 + an)/2
AriProgression(5, 2, 3)
    
 function geometricProgression(n, a1, q){  
    for(i = 0; i < n; i++){
        console.log(a1 * q*i)
    }
    console.log('Soma:' + (n *(a1- (a1 - ((n - 1) *q)))) / 2)
}
geometricProgression(10, 1, 10)
     