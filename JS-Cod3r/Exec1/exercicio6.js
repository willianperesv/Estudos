

function jurosimples(capital, taxa, tempo){
    var taxas = capital / 100 * taxa
    var rend = taxas * tempo
 console.log(`Juros SImples -> Aporte de: R$${capital}/ Taxas de Juros:R$${taxas} ao mês/ Redimento ${rend}`)
}

jurosimples(1000, 10, 12)

function juroscompostosIpiranga(capital, taxas, rendimento){
     var composto = capital * (1 + taxas) ** rendimento
     
     console.log(`Juros composotos -> Aporte de: R$${capital}/ Taxas de Juros:R$${taxas} ao ano/ Redimento R$ ${composto.toFixed(2).replace(".",",")}`) 
}
juroscompostosIpiranga(1000, 10/100, 12)