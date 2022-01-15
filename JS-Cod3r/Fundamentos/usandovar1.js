{
    {
        {
            {var sera = 'Sera??'} // var fica visivel para fora de seus blocos, variavel de escopo global
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
   
}
teste() 
console.log(local) // Ex de Erro, quando definimos variavel dentro de uma 'function'  ela age dentro do escopo local da funcao!