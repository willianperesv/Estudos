function triangulo(a, b, c){
if(a == b && a == c ){
   console.log(`Este triangulo é equilatero`)  
}else if(a != b && a != c && b != c){
    console.log(`Este é a porra do Escalene aquela banda de merda!`)
    } else {
    console.log(`Este triangulo é isosceles`)
}
}

triangulo(2, 2, 2)
triangulo(2, 4, 4)
triangulo(2, 6, 9)