function contar() {
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let  passo = document.getElementById('txtp')
let res = document.getElementById('res')
   
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
   // window.alert("[ERRO] faltam dados")
    res.innerHTML = 'Impossivel Contar!'
} else {
    res.innerHTML = 'contando:'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <=0 ){
        window.alert('passo invalido! Considerando PASSO1')
        p = 1
    }
    if  (i < f){
    //contagem crescente
    for (let c = i; c <= f; c+= p){
       res.innerHTML += `${c} \u{1F595}  `
    }
   
} else {
   //contagem regressiva
    for(let c = i; c >= f; c-=p){
        res.innerHTML += `${c} \u{1F595}  `
    }
}
res.innerHTML += `\u{1F3C1}` 

}
}