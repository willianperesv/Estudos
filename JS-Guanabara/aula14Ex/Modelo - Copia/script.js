function contar() {
    let nu1 = document.getElementById('ini')
    let nu2 = document.getElementById('fim')
    let nu3 = document.getElementById('passo')
    let res = document.getElementById('res')
    if (nu1.value.length == 0 || nu2.value.length == 0 || nu3.value.length == 0) {
        res.innerHTML = 'impossível contar'
        alert('parametro inválido')
    } else {
        let ini = Number(nu1.value)
        let fim = Number(nu2.value)
        let passo = Number(nu3.value)
        if (passo <= 0){
            alert('considerando passo = 1')
            passo = 1
        } 
        if (ini < fim) {
            for (let c = ini; c <= fim; c += passo) {
           console.log(c)
        }
      }
    }
}