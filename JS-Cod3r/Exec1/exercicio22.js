/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/
function calculo(valor, mes) {
    let juros = valor / 100 * 5
    let total = valor + juros

   for(let i = 1; i < mes; i++) {
    juros = total/100 * 5
    total = total + juros
   }


    console.log(total.toLocaleString('pt-br', {style:'currency', currency:'BRL'}))
}

calculo(100, 6)