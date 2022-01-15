const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
//este codigo vai retornar nos dois casos"funcs[]"
//10 porque var nao tem escopo local