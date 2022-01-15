function tabuada() {
let num = document.getElementById('txtn') // puxa o valor do numero
let tab = document.getElementById('seltab')// puxa a tubuada do select
    if(num.value.length == 0){  // determina que não pode ser 0 o valor
   window.alert('Please, Digite um numero')
    }else {
        let n = Number(num.value)// converte variavel num
        let c = 1 // inicio da contagem
        tab.innerHTML = ''  //limpa a caixa da tabuada
        while(c <= 10){  
         let item = document.createElement('option') // cria o option de forma dinamica, expandindo a quantidade formulada previamente
         item.text = `${n} x ${c} = ${n*c}`  // faz aparecer o texto da tuabuada na tela "c= contador"
         item.value = `tab${c}`// expoe todo valor que o contador irá mostrar
         tab.appendChild(item)// adicionar elemento filho item
         c++// faz a soma progressiva dos valores
        }
    }
    
}