let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let Valores = []

function isNumero(n) {
if (Number(n) >= 1 && Number(n) <= 100) {
    return true
} else {
    return false
 }
}

function inLista(n, l) {
 if (l.indexOf(Number(n)) != -1) {
   return true  
 } else {
     return false
 }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, Valores)) {
       Valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
   } else {
       window.alert('valor invalido ou já encontrado na lista')
   }
   num.value = ''
   num.focus()
}

function finalizar(){
if (Valores.length == 0) {
  window.alert('Adicione valores antes de finalizar!')  
 } else {
    let tot = Valores.length
    let maior = Valores[0]
    let menor = Valores [0]
    let soma = 0
    let media = 0
    for (let pos in Valores) {
        soma += Valores[pos]
        if (Valores[pos] > maior)
        maior = Valores[pos]
        if (Valores[pos] < menor)
           menor = Valores[pos] 
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
    res.innerHTML += ` O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> menor valor informado foi ${menor}. </p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
    res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`
 }
}